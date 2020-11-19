import jwt from 'jsonwebtoken';
import asyncHandler from '../utils/async';
import { BadRequest } from '../utils/error';

import AdminModel from '../models/AdminModel';

// Protect Routes
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization
    && req.headers.authorization.startsWith('Bearer')
  ) {
    // eslint-disable-next-line
    token = req.headers.authorization.split(' ')[1];
  }

  // Make sure token exits
  if (!token) {
    return res.status(401).json({ success: false, msg: 'You are not authorized to access this route' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = await AdminModel.findById(decoded.id);
    if (!req.admin || !req.admin.role) {
      return res.status(401).json({ success: false, msg: 'You are not authorized to access this route' });
    }
    next();
  } catch (err) {
    return res.status(401).json({ success: false, msg: 'Invalid token' });
  }
});

// Grant access for specific roles
// eslint-disable-next-line
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.admin.role)) {
      return next(
        new BadRequest(
          `User role ${req.admin.role} is not authorized to access this route`,
        ),
      );
    }
    next();
  };
};

const auth = {
  protect,
  authorize,
};

export default auth;
