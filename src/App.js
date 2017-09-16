// @flow

import React, { Component } from 'react'
import GraphiQL from './components/Graphiql'
import styled from 'styled-components'
import Modal from './components/Modal'

class App extends Component<{}>{
  render() {
    return (
      <Container>
        <GraphiQL />
        <Modal />
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100vh;
`

export default App;
