import React from 'react'
import Slider from "react-slick"
import ReactCompareImage from 'react-compare-image'

class App extends React.Component {
  state = {

}

render () {
  const settings = {
    dots: true,
    infinite: true,
    touchMove: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <div style={{maxWidth: 900, margin: 'auto'}}>
    <Slider {...settings}>
      <div>
  <ReactCompareImage leftImage="GreyStOld.jpg" rightImage="GreyStNew.jpg" sliderLineColor='rgba(255, 255, 255, 0.6)' sliderLineWidth={3} style={{boxShadow: 'none'}} />
    </div>
    <div>
    <ReactCompareImage leftImage="GreyStOld.jpg" rightImage="GreyStNew.jpg" sliderLineColor='rgba(255, 255, 255, 0.6)' sliderLineWidth={3} style={{boxShadow: 'none'}} handle={<img src="arrows.png" style={{width: 30, height: 15, opacity: 0.65}}/>}/>
    </div>
    <div>
    <ReactCompareImage leftImage="GreyStOld.jpg" rightImage="GreyStNew.jpg" sliderLineColor='rgba(255, 255, 255, 0.6)' sliderLineWidth={3} style={{boxShadow: 'none'}} handle={<button style={{background: '#ffffffa3', height: 5, border: 'none', width: 15}}></button>}/>
    </div>
    </Slider>
   </div>
  )}
}

export default App
