import React from 'react'
import Types from 'prop-types'

export default class Droppable extends React.Component {
  static propTypes = {
    onDrop: Types.func
  }

  static defaultProps = {
    onDrop: () => {}
  }

  state = {
    dragging: false
  }

  count = 0

  handleDragEnter = (e) => {
    console.log('enter', this.count)
    ++this.count
    this.setState({dragging: true})
  }

  handleDragLeave = (e) => {
    console.log('leave', this.count)
    if (--this.count === 0) {
      this.setState({dragging: false})
    }
  }

  handleDragOver = (e) => {
    e.preventDefault()
  }

  handleDrop = (e) => {
    console.log('drop')
    e.preventDefault()
    this.props.onDrop(e.dataTransfer.files)
    this.handleDragLeave()
  }

  render() {
    const { dragging } = this.state

    return (
      <div
        style={this.props.style}
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
      >
        {this.props.children(dragging)}
      </div>
    )
  }
}
