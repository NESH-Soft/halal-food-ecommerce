import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
// import { ComponentToPrint } from './ComponentToPrint';
import './Invoice.css'

const Invoice = () => {
    return (
        <div>
            <div class="invoice">
                <div class="invoice-header">
                    <div class="invoice-from">
                        <small>from</small>
                        <address class="m-t-5 m-b-5">
                            <strong class="text-inverse">Twitter, Inc.</strong><br />
                                    Street Address<br />
                                    City, Zip Code<br />
                                    Phone: (123) 456-7890<br />
                                    Fax: (123) 456-7890
                                </address>
                    </div>
                    <div class="invoice-to">
                        <small>to</small>
                        <address class="m-t-5 m-b-5">
                            <strong class="text-inverse">Company Name</strong><br />
                                    Street Address<br />
                                    City, Zip Code<br />
                                    Phone: (123) 456-7890<br />
                                    Fax: (123) 456-7890
                                </address>
                    </div>
                    <div class="invoice-date">
                        <small>Invoice / July period</small>
                        <div class="date text-inverse m-t-5">August 3,2012</div>
                        <div class="invoice-detail">
                            #0000123DSS<br />
                                Services Product
                            </div>
                    </div>
                </div>
                <div class="invoice-content">
                    <div class="table-responsive">
                        <table class="table table-invoice">
                            <thead>
                                <tr>
                                    <th>TASK DESCRIPTION</th>
                                    <th class="text-center" width="10%">RATE</th>
                                    <th class="text-center" width="10%">HOURS</th>
                                    <th class="text-right" width="20%">LINE TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <span class="text-inverse">Website design &amp; development</span><br />
                                    </td>
                                    <td class="text-center">$50.00</td>
                                    <td class="text-center">50</td>
                                    <td class="text-right">$2,500.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="text-inverse">Branding</span><br />
                                    </td>
                                    <td class="text-center">$50.00</td>
                                    <td class="text-center">40</td>
                                    <td class="text-right">$2,000.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="text-inverse">Redesign Service</span><br />
                                    </td>
                                    <td class="text-center">$50.00</td>
                                    <td class="text-center">50</td>
                                    <td class="text-right">$2,500.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="invoice-price">
                        <div class="invoice-price-left">
                            <div class="invoice-price-row">
                                <div class="sub-price">
                                    <small>SUBTOTAL</small>
                                    <span class="text-inverse">$4,500.00</span>
                                </div>
                                <div class="sub-price">
                                    <i class="fa fa-plus text-muted"></i>
                                </div>
                                <div class="sub-price">
                                    <small>PAYPAL FEE (5.4%)</small>
                                    <span class="text-inverse">$108.00</span>
                                </div>
                            </div>
                        </div>
                        <div class="invoice-price-right">
                            <small>TOTAL</small> <span class="f-w-600">$4508.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invoice;