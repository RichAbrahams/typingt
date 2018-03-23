import React from 'react'
import TypingTestCenterWrapper from './styledComponents/TypingTestCenterWrapper';

export default ({testList, wrongKey}) => {
  return (
    <TypingTestCenterWrapper wrongKey={wrongKey}>
      <p>
        {testList[0]}
      </p>
    </TypingTestCenterWrapper>
  )
}

