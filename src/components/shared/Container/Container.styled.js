import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.color};
  justify-content: ${(props) => props.justifyContent};
  padding: 48px 64px;
  display: flex;
  gap: 64px;
`;
