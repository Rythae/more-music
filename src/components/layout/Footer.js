import React from 'react';

const style = {
    backgroundColor: "#f97394",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

const phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer({ children }) {
    return (
        <div>
        <p style={{textAlign: 'center'}}><small>Designed With 
            <i class="fas fa-heart red-text"></i> By 
            </small></p>
            <div style={phantom} />
            <div style={style}><small><a class="text" href="https://twitter.com/RitaRythae"> &copy; 
            Rythae</a></small>
                { children }
            </div>
        </div>
    )
}

export default Footer;