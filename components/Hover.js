import React from 'react'

export default class extends React.Component {
  state = {
    hovering: false
  }

  handleMouseEnter = (e) => {
    this.setState({hovering: true})
  }

  handleMouseLeave = (e) => {
    this.setState({hovering: false})
  }

  render() {
    const { hovering } = this.state

    return (
      <div
        style={this.props.style}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.props.children(hovering)}
      </div>
    )
  }
}
