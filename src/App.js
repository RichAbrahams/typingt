import React from 'react'
import Container from './components/styledComponents/Container';
import TypingTestContainer from './components/TypingTestContainer';
import './App.css';


export default () => {
  return (
    <Container className="container">
      <TypingTestContainer />
    </Container>
  )
}
