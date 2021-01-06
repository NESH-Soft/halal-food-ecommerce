import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Invoice from './Invoice';

class ComponentToPrint extends React.Component {

    render() {

        return (
            <div>
                <Invoice />
            </div>
        );
    }
}

const InvoicePrint = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <div>
            <ComponentToPrint ref={componentRef} />
            <div className="float-right">
                <button onClick={handlePrint} className="btn btn-primary px-5">
                    Print
                </button>
            </div>
        </div>
    );
};

export default InvoicePrint;