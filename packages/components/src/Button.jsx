import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  position: flex;
  width: 290px;
  height: 36px;
  left: calc(50% - 290px / 2);
  top: calc(50% - 36px / 2 - 207.5px);
  background: ${props =>
    props.primary ? "#ff6c00" : props.secondary ? "#ffffff" : null};
  border: ${props =>
    props.primary ? "4px" : props.secondary ? "2px solid #FF6C00" : null};
  font-family: ${props =>
    props.primary ? "Roboto" : props.secondary ? "Helvetica Neue" : null};
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: ${props =>
    props.primary ? "16px" : props.secondary ? "17px" : null};
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: ${props =>
    props.primary ? "ffffff" : props.secondary ? "#ff6c00" : null};
  box-sizing: ${props => (props.secondary ? "border-box" : null)};
  border-radius: 4px;
`;

function Button(props) {
  console.log("props", props);
  return (
    <StyledButton primary={props.primary} secondary={props.secondary}>
      {props.children}
    </StyledButton>
  );
}
export default Button;
