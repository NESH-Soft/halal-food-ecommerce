import registerValidation from './registerValidation';
import loginValidation from './loginValidation';
import forgetPasswordValidation from './forgetPasswordValidation';
import changePasswordValidation from './chagePasswordValidation';
import orderValidation from './orderValidation';

const validators = {
  registerValidation,
  loginValidation,
  forgetPasswordValidation,
  changePasswordValidation,
  orderValidation,
};

export default validators;
