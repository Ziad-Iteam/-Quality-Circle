import React from 'react'
import styled from 'styled-components';

const StyledImage = styled.img`
width: 100vw;
height: calc(100vh - 80px);
position: absolute;
left: 0;
right: 0;
top: 0;
`

export const HomeSection = () => {
  return (
    <div className="position-relative"><StyledImage src='./wallhaven-1jkl2w.jpg' alt=""/></div>
  )
}
