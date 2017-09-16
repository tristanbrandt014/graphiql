import React from "react"
import styled from "styled-components"
import SettingsIcon from "./../resources/settings-icon"

export default ({ onClick }) => (
  <Open onClick={onClick}>
    <OpenInner>
      <SettingsIcon />
    </OpenInner>
  </Open>
)

const Open = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background: #98fb98;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

const OpenInner = styled.div`
  width: 70%;
  height: 70%;
`
