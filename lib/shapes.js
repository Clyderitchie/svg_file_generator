class Shape {
    constructor(color, text, fontColor) {
        this.color = color;
        this.text = text;
        this.fontColor = fontColor;
    }

}

class Circle extends Shape {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="${this.color}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>
      </svg>`
    }
}

class Square extends Shape {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <rect x="1" y="20" rx="0" ry="0" width="300" height="200"  fill="${this.color}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>
      </svg>`
    }
}

class Triangle extends Shape {
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <polygon points="150,0 0,200 300,200" fill="${this.color}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>
      </svg>`
    }
}

module.exports = {Circle, Triangle, Square};