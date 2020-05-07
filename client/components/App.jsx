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
      {/* 2 below are other slider options  */}
      {/* <div>
  <ReactCompareImage leftImage="AlbertOld.png" rightImage="AlbertNew.jpg" sliderLineColor='rgba(255, 255, 255, 0.6)' sliderLineWidth={3} style={{boxShadow: 'none'}} />
    </div> */}
        {/* <div>
    <ReactCompareImage leftImage="AlbertOld.png" rightImage="AlbertNew.jpg" sliderLineColor='rgba(255, 255, 255, 0.6)' sliderLineWidth={3} style={{boxShadow: 'none'}} handle={<button style={{background: '#ffffffa3', height: 5, border: 'none', width: 15}}></button>}/>
    </div> */}
    <div>
    <ReactCompareImage leftImage="AlbertOld.png" rightImage="AlbertNew.jpg" sliderLineColor='rgba(255, 255, 255, 0.6)' sliderLineWidth={3} style={{boxShadow: 'none'}} handle={<img src="arrows.png" style={{width: 30, height: 15, opacity: 0.65}}/>}/>
    </div>
    <div>
    <ReactCompareImage leftImage="CornerofQueenandFortold.png" rightImage="Cornerofqueenandfortnew.jpg" sliderLineColor='rgba(255, 255, 255, 0.6)' sliderLineWidth={3} style={{boxShadow: 'none'}} handle={<img src="arrows.png" style={{width: 30, height: 15, opacity: 0.65}}/>}/>
    </div>
    <div>
    <ReactCompareImage leftImage="GraftonOld.png" rightImage="GraftonNew.jpg" sliderLineColor='rgba(255, 255, 255, 0.6)' sliderLineWidth={3} style={{boxShadow: 'none'}} handle={<img src="arrows.png" style={{width: 30, height: 15, opacity: 0.65}}/>}/>
    </div>
    <div>
    <ReactCompareImage leftImage="GreyStOld(2).jpg" rightImage="GreyStNew(2).jpg" sliderLineColor='rgba(255, 255, 255, 0.6)' sliderLineWidth={3} style={{boxShadow: 'none'}} handle={<img src="arrows.png" style={{width: 30, height: 15, opacity: 0.65}}/>}/>
    </div>
    <div>
    <ReactCompareImage leftImage="HighStold.png" rightImage="HighStNew.jpg" sliderLineColor='rgba(255, 255, 255, 0.6)' sliderLineWidth={3} style={{boxShadow: 'none'}} handle={<img src="arrows.png" style={{width: 30, height: 15, opacity: 0.65}}/>}/>
    </div>
    <div>
    <ReactCompareImage leftImage="Karangahapeold.png" rightImage="KarangahapeNew.jpg" sliderLineColor='rgba(255, 255, 255, 0.6)' sliderLineWidth={3} style={{boxShadow: 'none'}} handle={<img src="arrows.png" style={{width: 30, height: 15, opacity: 0.65}}/>}/>
    </div>
    <div>
    <ReactCompareImage leftImage="PittOld.png" rightImage="PittStNew.jpg" sliderLineColor='rgba(255, 255, 255, 0.6)' sliderLineWidth={3} style={{boxShadow: 'none'}} handle={<img src="arrows.png" style={{width: 30, height: 15, opacity: 0.65}}/>}/>
    </div>
    <div>
    <ReactCompareImage leftImage="QueenStcnrofcustomsold.png" rightImage="QueenStcnrofcustomsnew.jpg" sliderLineColor='rgba(255, 255, 255, 0.6)' sliderLineWidth={3} style={{boxShadow: 'none'}} handle={<img src="arrows.png" style={{width: 30, height: 15, opacity: 0.65}}/>}/>
    </div>
    <div>
    <ReactCompareImage leftImage="QueenStVulcanandDurhamOld.png" rightImage="QueenStVulcanandDurhamNew.jpg" sliderLineColor='rgba(255, 255, 255, 0.6)' sliderLineWidth={3} style={{boxShadow: 'none'}} handle={<img src="arrows.png" style={{width: 30, height: 15, opacity: 0.65}}/>}/>
    </div>
    <div>
    <ReactCompareImage leftImage="ShortlandQueenOld.png" rightImage="ShortlandQueenNew.jpg" sliderLineColor='rgba(255, 255, 255, 0.6)' sliderLineWidth={3} style={{boxShadow: 'none'}} handle={<img src="arrows.png" style={{width: 30, height: 15, opacity: 0.65}}/>}/>
    </div>
    <div>
    <ReactCompareImage leftImage="SwansonQueenOld.png" rightImage="SwansonQueenNew.jpg" sliderLineColor='rgba(255, 255, 255, 0.6)' sliderLineWidth={3} style={{boxShadow: 'none'}} handle={<img src="arrows.png" style={{width: 30, height: 15, opacity: 0.65}}/>}/>
    </div>
    <div>
    <ReactCompareImage leftImage="SymondsOld.png" rightImage="SymondsNew.jpg" sliderLineColor='rgba(255, 255, 255, 0.6)' sliderLineWidth={3} style={{boxShadow: 'none'}} handle={<img src="arrows.png" style={{width: 30, height: 15, opacity: 0.65}}/>}/>
    </div>
    <div>
    <ReactCompareImage leftImage="VictoriaandHonsoOld.png" rightImage="VictoriaandHobsonNew.jpg" sliderLineColor='rgba(255, 255, 255, 0.6)' sliderLineWidth={3} style={{boxShadow: 'none'}} handle={<img src="arrows.png" style={{width: 30, height: 15, opacity: 0.65}}/>}/>
    </div>
    <div>
    <ReactCompareImage leftImage="VictoriaStOld.png" rightImage="VictoriaStNew.jpg" sliderLineColor='rgba(255, 255, 255, 0.6)' sliderLineWidth={3} style={{boxShadow: 'none'}} handle={<img src="arrows.png" style={{width: 30, height: 15, opacity: 0.65}}/>}/>
    </div>
    <div>
    <ReactCompareImage leftImage="WyndhamQueenStOld.png" rightImage="WyndhamStQueenNew.jpg" sliderLineColor='rgba(255, 255, 255, 0.6)' sliderLineWidth={3} style={{boxShadow: 'none'}} handle={<img src="arrows.png" style={{width: 30, height: 15, opacity: 0.65}}/>}/>
    </div>
    </Slider>
   </div>
  )}
}

export default App
