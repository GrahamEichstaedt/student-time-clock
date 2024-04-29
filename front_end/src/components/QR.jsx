import QRCode from 'react-qr-code';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QR = () => {

        const [ qrValue, setQrValue ] = useState("https://www.google.com");
        const [ fgColor, setFgColor ] = useState("#000000");
        const navigate = useNavigate();


        return (
                <section style={{textAlign: 'center'}}>
                        <h2>Sign In</h2>
                        {/* <input 
                                type="text"
                                value={qrValue}
                                onChange={handleInputChange}
                                placeholder={"Enter text or a URL"}
                        />
                        <br />
                        <input 
                                type="color"
                                value={fgColor}
                                onChange={handleColorChange}
                        />
                        <br /> */}
                        <QRCode
                                value={qrValue}
                                size={300}
                                bgColor='#FFF'
                                fgColor={fgColor}
                                level="H" // High Error Correction level
                                style={{borderRadius: "25px"}}
                        
                        />
                </section>
        )
}

export default QR;