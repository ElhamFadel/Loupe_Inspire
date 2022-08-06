import ClientGroup from "../ClientGroup";
import UnderHood from "../UnderHood";
import styled from "styled-components";
function Viwe() {
  return (
    <ViweContainer className="viwe-container">
      <ClientGroup />
      <UnderHood />
    </ViweContainer>
  );
}
const ViweContainer = styled.div`
  display: flex;
`;
export default Viwe;
