import React from 'react'
import TypingTestLeftWrapper from './styledComponents/TypingTestLeftWrapper';

export default ({completeList}) => {
  return (
    <TypingTestLeftWrapper>
      <p>
        {completeList}
      </p>
    </TypingTestLeftWrapper>
  )
}

