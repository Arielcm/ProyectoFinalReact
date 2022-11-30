import React from 'react';

const Footer = (props) => {
    return (
        <div className="fixed-bottom bg-info">
            <footer id="footer">
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Meza Cristian</span></strong>. Todos los derechos reservados
                    </div>
                    <div className="credits">
                        Diseñado por <a href="#">Meza Cristian</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;