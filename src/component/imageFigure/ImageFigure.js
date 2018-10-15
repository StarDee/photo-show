import React from "react";
import './imageFigure.css'

class ImageFigure extends React.Component {
  constructor(){
    super()
  }
  handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.inverse();
  }


  render() {
    let imgFigureClassName = "img-figure",
      styleObj;
    imgFigureClassName += this.props.arrange.isInverse ? " is-inverse" : "";
    return (
      <figure
        className={imgFigureClassName}
        style={styleObj}
        onClick={this.handleClick}
      >
        <img src={this.props.data.imageURL} alt={this.props.data.title} />
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
          <div className="img-back" onClick={this.handleClick}>
            <p>{this.props.data.description}</p>
          </div>
        </figcaption>
      </figure>
    );
  }
}

export default ImageFigure;
