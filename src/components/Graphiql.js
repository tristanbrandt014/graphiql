// @flow

import React from "react"
import fetch from "isomorphic-fetch"
import GraphiQL from "graphiql"
import { config } from "../config"
import {connect} from 'react-redux'

type Props = {
  settings: {
    token: string
  }
}

class GraphiQLContainer extends React.Component<Props> {
  graphQLFetcher = graphQLParams => {
    const headers = {}
    headers[ "Content-Type"] = "application/json"
    if (this.props.settings.token) {
      headers["Authorization"] = this.props.settings.token
    }
    return fetch(config.endpoint, {
      method: "post",
      headers,
      body: JSON.stringify(graphQLParams)
    }).then(response => response.json())
  }

  render() {
    return (
      <GraphiQL fetcher={this.graphQLFetcher} />
    )
  }
}

const mapStateToProps = state => ({
  settings: state.settings
})

export default connect(mapStateToProps, {})(GraphiQLContainer)