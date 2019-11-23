import React from 'react'
import ReactPlayer from 'react-player'

class App extends React.Component {
  state = {
    video1IsPlaying: false,
    video2IsPlaying: false,
    hover: false
  }

  video1Controller = () => {
    let vid1 = document.getElementById('video1')
    if (vid1.paused) {
      vid1.play()
      this.setState({ video1IsPlaying: true, video2IsPlaying: false })
      let iframes = document.querySelectorAll('iframe')
      Array.prototype.forEach.call(iframes, iframe => {
        iframe.contentWindow.postMessage(JSON.stringify({ event: 'command',
          func: 'pauseVideo' }), '*')
      })
    } else {
      vid1.pause()
      this.setState({ video1IsPlaying: false })
    }
  }

video2Controller = () => {
  let vid1 = document.getElementById('video1')
  if (!vid1.paused) {
    vid1.pause()
    this.setState({ video2IsPlaying: true, video1IsPlaying: false })
  }
}

hoverOn = () => {
  this.setState({ hover: true })
}

hoverOff = () => {
  this.setState({ hover: false })
}

render () {
  return (
    <>
      {this.state.video1IsPlaying ? <div></div> : <img id="button" className="play" src="playIcon.png" onClick={this.video1Controller}/>}
      {this.state.hover && this.state.video1IsPlaying ? <img id="button" className="pause" src="pauseIcon.png" onClick={this.video1Controller}/> : <div></div>}

      <div className="video-container">
        <video id="video1" onClick={this.video1Controller} onMouseMove={this.hoverOn} onMouseLeave={this.hoverOff}> >
          <source src="aucklandmuseum.mp4" type="video/mp4"/>
        </video>
        <ReactPlayer url='https://www.youtube.com/embed/18rARy8g4Hc'
          id="video2"
          width='20%' height='30%'
          controls={false}
          onPlay={this.video2Controller}
          onPause={() => this.setState({ video2IsPlaying: false })}
        />

      </div>
    </>
  )
}
}

export default App
