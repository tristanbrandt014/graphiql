import React from "react"
import Modal from "react-modal"
import Settings from "./Settings"
import styled from "styled-components"

const content = {
  background: "#ddd"
}

const overlay = {
  zIndex: 50
}

const modalStyles = {
  content,
  overlay
}

type Props = {
  isOpen: boolean,
  toggle: Function
}

class ModalContainer extends React.Component<Props> {
  render() {
    return (
      <Modal isOpen={this.props.isOpen} contentLabel="Test" style={modalStyles}>
        <Container>
          <Close onClick={this.props.close} />
          <Settings />
        </Container>
      </Modal>
    )
  }
}

const Close = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: red;
  cursor: pointer;
`

const Container = styled.div`height: 100%;`

export default ModalContainer
