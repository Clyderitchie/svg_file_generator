const fs = require('fs');
const inquirer = require('inquirer');
const Circle = require('./lib/shapes');

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

function app () {
    inquirer.prompt(questions).then(answer => {
        let shape;
        if(answer.shape === 'circle') {
            shape = new Circle(answer.shapeColor, answer.text, answer.color)
        }
        fs.writeFileSync(`./examples/${answer.color}-${answer.shape}.svg`,shape.render());
    })
}

app();