import React from "react"
import styled from "styled-components"
import {saveSettings} from './../store/actions/settings'
import {connect} from 'react-redux'
import type {Settings as SettingsType} from './../flow/settings'

type Props = {
    settings: SettingsType,
    saveSettings: Function
}

class Settings extends React.Component<Props> {
  handleTokenChange(e) {
    const token = e.target.value
    this.props.saveSettings({
      token
    })
  }

  render() {
    return (
      <Container>
        <Input value={this.props.settings.token} type="text" onChange={(e) => this.handleTokenChange(e)} placeholder="JWT" />
      </Container>
    )
  }
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Input = styled.input`
  text-align: center;
  width: 50%;
`

const MapStateToProps = state => ({
    settings: state.settings
})

const MapDispatchToProps = dispatch => ({
    saveSettings: (settings) => dispatch(saveSettings(settings))
})

export default connect(MapStateToProps, MapDispatchToProps)(Settings)
