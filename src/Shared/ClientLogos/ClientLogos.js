import { React } from "react";
import './ClientLogos.css';

export const ClientLogos = ({ images }) => {
    return (
        <div className='footer'>
            {images.map((src, index) => (
                <img key={index} src={src} alt={`Client ${index + 1}`} />
            ))}
        </div>
    );
}
