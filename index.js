const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('./lib/shapes');


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 characters for your logo?',
        validate: (text) => text.length <= 3 || 'Text  must not be more then 3 characters'
    },
    {
        type: 'input',
        name: 'color',
        message: 'Please chose a color for your logo?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Which shape would you like your logo to be?',
        choices: ['square', 'circle', 'triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape to be?'
    }
]

function app() {
    inquirer.prompt(questions).then(answer => {
        let shape;
        switch (answer.shape) {
            case 'circle':
                shape = new Circle(answer.shapeColor, answer.text, answer.color);
                break;
            case 'square':
                shape = new Square(answer.shapeColor, answer.text, answer.color);
                break;
            default:
                shape = new Triangle(answer.shapeColor, answer.text, answer.color);
                break;
        }
          
        fs.writeFileSync(`./examples/${answer.shapeColor}-${answer.shape}.svg`, shape.render());
    })
}


app();