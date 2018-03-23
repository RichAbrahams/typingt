import styled from "styled-components";

const stc = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  font-size: 28px;
  white-space: pre;
  opacity: 0.8;
  & p::first-letter {
    opacity: 1;
  }
`;

export default stc;
