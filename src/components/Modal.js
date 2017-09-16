import React from "react"
import Modal from "react-modal"
import keydown from 'react-keydown';
import Settings from "./Settings"

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

type State = {
    isOpen: boolean
}

class ModalContainer extends React.Component<{}, State> {
    state = {
        isOpen: false
    }
    @keydown("ctrl+q")
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
        <Modal isOpen={this.state.isOpen} contentLabel="Test" style={modalStyles}>
            <Settings />
          </Modal>
        )
    }

}

export default ModalContainer