
const { Square, Triangle, Circle } = require("./shapes");

class SVG {
  constructor() {
      this.shapeColor = "";
      this.text = "";
      this.textColor = "";
      this.shape = null;
  }
  setText(text, textColor) {
    this.text = text;
    this.textColor = textColor;
  }
  setColor(shapeColor) {
      this.shapeColor = shapeColor;
  }
  setShape(shape) {
    this.shape = shape;
  }  

  render() {
    var svg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
      
    if (this.shape != null) {
        this.shape.setColor(this.shapeColor);
        svg += this.shape.render();
    }
    
    if (this.text != "") {
      svg += '<text x="150" y="125" font-size="60" text-anchor="middle" fill="' + this.textColor + '">' + this.text + '</text>';
    }
    
    svg += '</svg>';
    return svg;
  }
}

module.exports = SVG;