import React from 'react'
import TypingTestRightWrapper from './styledComponents/TypingTestRightWrapper.js'



export default ({testList, wrongKey}) => {
  return (
    <TypingTestRightWrapper>
    <p>
    {testList.slice(1)}
    </p>
  </TypingTestRightWrapper>
  )
}
