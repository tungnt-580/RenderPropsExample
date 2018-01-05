import React from 'react'
import Types from 'prop-types'
import Droppable from './Droppable'
import Hover from './Hover'

export default class App extends React.Component {
  state = {
    files: []
  }

  handleDrop = (files) => {
    this.setState({files})
  }

  render() {
    const files = this.state.files

    return (
      <div>
        <div>
          <Droppable onDrop={this.handleDrop} style={{
            width: '500px',
            height: '300px',
          }}>
            {(dragging) => (
              <Hover style={{width: '100%', height: '100%'}}>
                {(hovering) => (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#ddd',
                    borderRadius: '5px',
                    border: dragging? '1px solid #000' : hovering? '1px dashed #000' : '',
                    position: 'relative'
                  }}>
                    <div>
                      {files.length === 0 ? 'Drag & Drop files here' : [
                        <span key='0'>{`${files.length} files have just been dropped: `}</span>,
                        <ul key='1'>
                          {Array.from(files).map(file =>
                            <li key={file.name}>{file.name}</li>
                          )}
                        </ul>
                      ]}
                    </div>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      display: dragging? 'flex' : 'none',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <span style={{
                        padding: '10px',
                        color: '#fff',
                        backgroundColor: '#222',
                        borderRadius: '2px'
                      }}>
                        Drop now!
                      </span>
                    </div>
                  </div>
                )}
              </Hover>
            )}
          </Droppable>
        </div>
      </div>
    )
  }
}
