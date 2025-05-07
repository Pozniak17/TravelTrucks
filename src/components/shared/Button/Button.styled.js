import styled from "styled-components";

// const isGeneral = (props) => props.variant === "general";

export const StyledButton = styled.button`
  color: ${(props) =>
    props.$buttonstyle === "general"
      ? "var(--White, #fff)"
      : "var(--Main, #101828)"};
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.08px;

  display: flex;
  width: ${(props) => props.width};
  padding: 16px 0px;
  justify-content: center;
  align-items: center;

  border-radius: 200px;
  background-color: ${(props) =>
    props.$buttonstyle === "general"
      ? "var(--Button, #e44848)"
      : "var(--White, #FFF)"};
  border: ${(props) =>
    props.$buttonstyle === "general"
      ? "inherit"
      : "1px solid var(--Gray-light, #DADDE1)"};
  cursor: pointer;
  transition-property: background-color, border;
  transition-duration: 300ms;

  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.$buttonstyle === "general"
        ? "var(--Button-Hover, #d84343)"
        : "inherit"};
    border: ${(props) =>
      props.$buttonstyle === "general"
        ? "inherit"
        : "1px solid var(--Button-Hover, #D84343);"};
  }
`;
