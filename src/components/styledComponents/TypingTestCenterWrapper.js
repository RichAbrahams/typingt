import styled, {keyframes} from 'styled-components';

const incorrect = keyframes`
  from {
    text-shadow: 0px 0px 0px rgba(255, 69, 0, 1);
    color: initial;
  }

  to {
    text-shadow: 0px 0px 15px rgba(255, 69, 0, 1);
    color: rgba(255, 69, 0, 1);
  }
`;

const stc = styled.div`
  display: flex;
  flex:0;
  justify-content: flex-end;
  font-size: 28px;
  white-space: pre;
  animation: ${props => props.wrongKey ? incorrect : null };
  animation-direction: alternate;
  animation-duration: 400ms;
  animation-iteration-count: infinite;
`;

export default stc;
