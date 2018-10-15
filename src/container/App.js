import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import ImageFigure from '../component/ImageFigure';
import * as imageDatas from "../asset/data/imagesData.json";
class App extends Component {
  // 获取图片相关的数据
  

  constructor() {
    super();
    this.state={imageDatasArr: this.getImageDatas(imageDatas)};
  }
  


  // 利用自执行函数， 将图片名信息转成图片URL路径信息
  getImageDatas(imageDatasArr) {
    for (let i = 0, j = imageDatasArr.length; i < j; i++) {
      let singleImageData = imageDatasArr[i];

      singleImageData.imageURL = "../images/" + singleImageData.title;

      imageDatasArr[i] = singleImageData;
    }

    return imageDatasArr;
  }

  render() {
    const images = this.state.imageDatasArr.map((e,index) => {
      return <ImageFigure data={e} key={index} />;
    });
    return <div className="App">{images}</div>;
  }
}

export default App;
