const {Circle, Triangle, Square} = require('../lib/shapes');

describe('', function() {
    it('should return a circle if the user choses a circle as the shape', function () {
        shape = new Circle('red', 'cir', 'black')
        expect(shape).toBeInstanceOf(Circle);
    })

    it('should return a square if the user choses a circle as the shape', function () {
        shape = new Square('red', 'squ', 'black')
        expect(shape).toBeInstanceOf(Square);
    })

    it('should return a triangle if the user choses a circle as the shape', function () {
        shape = new Triangle('red', 'cir', 'black')
        expect(shape).toBeInstanceOf(Triangle);
    })

    it('should return a circle if the user choses a circle as the shape', function () {
        shape = new Circle('red', 'cir', 'black')
        expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="red"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">cir</text>
      </svg>`);
    })

    it('should return a triangle if the user choses a triangle as the shape', function () {
        shape = new Triangle('red', 'tri', 'black')
        expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <polygon points="150,0 0,200 300,200" fill="red"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">tri</text>
      </svg>`);
    })

    it('should return a square if the user choses a square as the shape', function () {
        shape = new Square('red', 'squ', 'black')
        expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <rect x="1" y="20" rx="0" ry="0" width="300" height="200"  fill="red"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">squ</text>
      </svg>`);
    })
})