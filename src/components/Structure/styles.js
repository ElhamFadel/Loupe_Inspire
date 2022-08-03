import styled from "styled-components";
export const WrapperBox = styled.div`
  text-align: center;
  height: 320px;
  width: 331px;
  padding: 1rem;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;
export const Label = styled.h4`
  color: #fff;
  font-size: 1.8rem;
  font-weight: 400;
  text-transform: uppercase;
  align-self: center;
`;
export const Box = styled.div`
  height: 260px;
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 0 0 3px ${(props) => props.color || "#4ba02c"},
    0 0 0 12px #171717, 0 0 0 15px ${(props) => props.color || "#4ba02c"},
    0 0 0 11px #171717;
`;
