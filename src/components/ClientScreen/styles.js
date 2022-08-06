import styled from "styled-components";

export const ClientContainer = styled.div`
  width: 43.5rem;
  height: 25rem;
  border-radius: 5px;
  background: #090909;
  color: #fff;
`;
export const HeaderContainer = styled.div`
  padding: 1rem;
  background: #2b2b2b;
  text-align: center;
  position: relative;
`;
export const SpanStyle = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 10px;
  background: #fff;
  display: block;
  left: ${(props) => props.left};
  position: absolute;
  background: ${(props) => props.bg || "#fc624d"};
`;
export const HeaderClient = styled.h3``;
export const BodyClient = styled.div``;
