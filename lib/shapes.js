class Square {
    constructor() {
        this.shapeColor = "";
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`;
    }
}

class Triangle {
    constructor() {
        this.shapeColor = "";
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
}

class Circle {
    constructor() {
        this.shapeColor = "";
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
}

module.exports = {
    Square,
    Triangle,
    Circle
}