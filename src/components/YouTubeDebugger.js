// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {

  constructor(){
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleClickBitrate = (event) => {
    let newBitrate = 12
    this.setState({
      errors: [...this.state.errors],
      settings: {
        bitrate: newBitrate,
        video: {
          resolution: "1080p"
        }
      }
    })
  }

  handleClickResolution = (event) => {
    let newResolution = "720p"
    this.setState({
      errors: [...this.state.errors],
      settings: {
        bitrate: 8,
        video: {
          resolution: newResolution
        }
      }
    })
  }

  render() {
    return(
      <div>
        <button className='bitrate' onClick={this.handleClickBitrate}></button>
        <button className='resolution' onClick={this.handleClickResolution}></button>
      </div>
    )
  }
}

export default YouTubeDebugger
