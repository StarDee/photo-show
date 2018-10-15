import React from "react";

 class ImageFigure extends React.Component {

  handleClick(e) {
    
    e.stopPropagation();
    e.preventDefault();
  }

  render() {
    let imgFigureClassName,styleObj;
    return <figure
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
    </figure>;
  }
}

export default ImageFigure