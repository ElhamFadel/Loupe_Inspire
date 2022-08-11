import Editor from "../CodeEditor";
import Client from "../ClientScreen";
import styled from "styled-components";
function ClientGroup() {
  return (
    <ClientContainer>
      <Editor />
      <Client />
    </ClientContainer>
  );
}
const ClientContainer = styled.div`
  min-height: 97vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 3rem;
`;
export default ClientGroup;
