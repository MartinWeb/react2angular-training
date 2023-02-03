import { ReactNode, useState } from "react";
import './alert.scss';

export interface AlertProps {
  title: string;
  type: string;
  children?: ReactNode;
}

const Alert = ({ title, type, children }: AlertProps) => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <>
            {isVisible ? 
                <div className={`alert ${type}`}>
                    <h4>{title}</h4>
                    <span className="close" onClick={() => setIsVisible(false)}>X</span>
                    {children}
                </div> 
            : null}
        </>
    );
};

export { Alert };
