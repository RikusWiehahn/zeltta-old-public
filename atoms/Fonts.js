import React from 'react';

export const Heading = ({ children, style }) => {
  return (
    <h1 style={{ 
      ...style,
      fontFamily: 'Montserrat, sans-serif', 
      fontSize: 52,
      fontWeight: '800',
    }}>{children}</h1>
  )
}

export const Paragraph = ({ children, style }) => {
  return (
    <p style={{ 
      ...style,
      fontFamily: 'Montserrat, sans-serif', 
      fontSize: 14,
      fontWeight: '300',
    }}>{children}</p>
  )
}