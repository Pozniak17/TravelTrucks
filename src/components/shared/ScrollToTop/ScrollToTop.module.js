import styled from "styled-components";

export const TopButton = styled.button`
  background: url("/icons/chevron-button.svg") no-repeat center;
  position: fixed;
  bottom: 20px;
  right: 40px;
  width: 56px;
  height: 56px;
  background-color: #ed509e;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  color: white;

  z-index: 1000;

  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, background-image 0.3s ease;

  &:hover {
    background: url("/icons/chevron-button-hover.svg") no-repeat center;
    background-color: #883e79;
    transition: background-color 0.3s ease, background-image 0.3s ease;
  }
`;
