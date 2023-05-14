import { React } from "react";
import './ElevatedButton.css';

export const ElevatedButton = ({ name }) => {

    const handleClick = () => {
    }

    return (
        <div className='elevated-button'>
            <button onClick={handleClick} className='elevated'>{name}</button>
        </div>
    );
}
