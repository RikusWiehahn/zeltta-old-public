import React from 'react';

const Logo = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed', 
      top: '20px',
      left: '20px',
      width: '100vw',
      zIndex: 2,
    }}>
      <div style={{
        width: '1000px',
        '@media screen and (maxWidth: 1000px)': {
          width: '100vw',
        }
      }}>
        <img src="/static/zeltta-logo.svg" alt="zeltta logo" style={{ height: '30px'  }} />
      </div>
    </div>
  )
}

export default Logo;
