import React from 'react';
import styled from '@emotion/styled';

const InnerDiv = styled.div({
  width: '1000px',
  '@media screen and (maxWidth: 1000px)': {
    width: '100vw',
  }
});

const Logo = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed', 
      padding: '20px',
      zIndex: 1,
      width: '100%'
    }}>
      <InnerDiv>
        <img src="/static/zeltta-logo.svg" alt="zeltta logo" style={{ height: '30px'  }} />
      </InnerDiv>
    </div>
  )
}

export default Logo;
