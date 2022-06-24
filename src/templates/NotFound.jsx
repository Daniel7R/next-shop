import React from 'react';
import '@styles/NotFound.scss';

const NotFound = () => {
    return (
        <div className='error-container'>
            <div className="error">
                <div className="number">4</div>
                <div className="illustration">
                    <div className="circle"></div>
                    <div className='clip'>
                        <div className="paper">
                            <div className="face">
                                <div className="eyes">
                                    <div className="eye eye-left"></div>
                                    <div className="eye eye-right"></div>
                                </div>
                                <div className="cachete cachete-left"></div>
                                <div className="cachete cachete-right"></div>
                                <div className="mouth"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="number">4</div>
            </div>
            <div className="text">Oops. La página que estás buscando no exiete.</div>
            <a href="/" className="button">Regresar</a>
        </div>
    );
}

export { NotFound }
