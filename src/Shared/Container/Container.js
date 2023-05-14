import { React } from "react";
import './Container.css';

export const Container = ({ children }) => {

    return (
        <div data-testid="container" className='container'>
            {children}
        </div>
    );
}
