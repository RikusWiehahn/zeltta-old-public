import React from 'react';
import styled from '@emotion/styled';

const PageButton = (props) => {
  return (
    <StyledButton styling={props.styling} onClick={props.onClick} style={props.style || {}}>
      {props.label || 'Label'}
      {props.icon || null }
    </StyledButton>
  );
};

const StyledButton = styled.button(({ styling }) => {
  const stl = styling || {};
  return ({
    fontFamily: 'Montserrat, sans-serif', 
    fontSize: 14,
    fontWeight: '300',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: stl.color || '#fff',
    paddingTop: stl.paddingTop || '10px',
    paddingBottom: stl.paddingBottom || '10px',
    marginTop: stl.marginTop || '2px',
    marginBottom: stl.marginBottom || '2px',
    borderRadius: stl.borderRadius || '7px',
    borderStyle: 'solid',
    borderWidth: '1px',
    textAlign: 'center',
    position: stl.position || 'relative',
    borderColor: stl.borderColor || 'transparent',
    backgroundColor: stl.backgroundColor || '#4400ff',
    paddingLeft: stl.paddingLeft || '18px',
    marginLeft: stl.marginLeft || '5px',
    marginRight: stl.marginRight || '0px',
    paddingRight: stl.paddingRight || '18px',
    WebkitTapHighlightColor: 'transparent',
    userSelect: 'none',
    transition: '350ms',
    WebkitUserSelect: 'none',
    ':focus': {
      outline: 0,
    },
    ':hover': {
      backgroundColor: stl.activeBackgroundColor ? stl.activeBackgroundColor : '#000',
      boxShadow: stl.activeShadow || '0px 14px 35px 0px rgba(49, 49, 49, 0.2)',
      borderColor: stl.hoverBorderColor || 'transparent',
      cursor: 'pointer',
      color: stl.hoverColor ? stl.hoverColor : stl.color ? stl.color : '#fff',
      marginTop: stl.marginTop ? `calc(${stl.marginTop || '0px'} - 2px` : '-2px)',
      marginBottom: stl.marginBottom ? `calc(${stl.marginBottom || '0px'} + 2px)` : '2px',
    },
    ':active': {
      backgroundColor: stl.activeBackgroundColor ? stl.activeBackgroundColor : '#000',
      boxShadow: stl.activeShadow || '0px 14px 35px 0px rgba(49, 49, 49, 0.2)',
      borderColor: stl.hoverBorderColor || 'transparent',
      marginTop: stl.marginTop ? `calc(${stl.marginTop || '0px'} - 2px` : '-2px)',
      marginBottom: stl.marginBottom ? `calc(${stl.marginBottom || '0px'} + 2px)` : '2px',
      cursor: 'pointer',
      color: stl.hoverColor ? stl.hoverColor : stl.color ? stl.color : '#fff',
    }
  });
});

export default PageButton;
