// @flow

import React, { Component } from "react"
import GraphiQL from "./components/Graphiql"
import styled from "styled-components"
import Modal from "./components/Modal"
import SettingsButton from './components/SettingsButton'

type State = {
  isModalOpen: boolean
}

class App extends Component<{}, State> {
  state = {
    isModalOpen: false
  }

  toggleModal(open: -1 | 0 | 1 = 0) {
    let newState
    switch (open) {
      case -1:
        newState = false
        break
      case 1:
        newState = true
        break
      default:
        newState = !this.state.isModalOpen;
    }
    this.setState({
      isModalOpen: newState
    })
  }

  render() {
    return (
      <Container>
        <GraphiQL />
        <Modal isOpen={this.state.isModalOpen} close={() => this.toggleModal(-1)} />
        <SettingsButton onClick={() => this.toggleModal(1)} />
      </Container>
    )
  }
}

const Container = styled.div`
  height: 100vh;
  position: relative;
`

export default App
