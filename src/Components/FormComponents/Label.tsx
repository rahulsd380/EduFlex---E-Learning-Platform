import { ReactNode } from "react";

type TLabelProps = {
    children : ReactNode,
    htmlFor : string
}

const Label : React.FC<TLabelProps> = ({children, htmlFor}) => {
    return (
        <div>
            <label htmlFor={htmlFor} className="text-body-text font-medium text-sm">{children}</label>
        </div>
    );
};

export default Label;