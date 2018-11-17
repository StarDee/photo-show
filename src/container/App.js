import React, { Component } from "react";
import "./App.css";
import ImageFigure from '../component/imageFigure/ImageFigure';
import * as imageDatas from "../asset/data/imagesData.json";
class App extends Component {
  // 获取图片相关的数据
  

  constructor() {
    super();
    this.state={imageDatasArr: this.getImageDatas(imageDatas),imgsArrangeArr:[]};
  }
  
  /**
   * 将图片名信息转成图片URL路径信息
   * @param {*} imageDatasArr 
   */
  getImageDatas(imageDatasArr) {
    for (let i = 0, j = imageDatasArr.length; i < j; i++) {
      let singleImageData = imageDatasArr[i];

      singleImageData.imageURL = "../images/" + singleImageData.title;

      imageDatasArr[i] = singleImageData;
    }

    return imageDatasArr;
  }

  inverse(index){
    return ()=>{
    let imgsArrangeArr = this.state.imgsArrangeArr;
    imgsArrangeArr[index].isInverse = !imgsArrangeArr[index].isInverse;
    this.setState({
      imgsArrangeArr: imgsArrangeArr
    });
  }
  }

  render() {
    let imgsArrangeArr=this.state.imgsArrangeArr;
    const images = this.state.imageDatasArr.map((e,index) => {
      if (!imgsArrangeArr[index]) {
        imgsArrangeArr[index] = {
            pos: {
                left: 0,
                top: 0
            },
            rotate: 0,
            isInverse: false,
            isCenter: false
        };

    }
      return <ImageFigure data={e} key={index} arrange = {imgsArrangeArr[index]} inverse={this.inverse(index)}/>;
    });
    return <div className="App">{images}</div>;
  }
}

export default App;
