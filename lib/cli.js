const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const SVG = require('./svg.js');
const { Square, Triangle, Circle } = require("./shapes");

class CLI {
    constructor() {}
    
    run() {
      return inquirer
      .prompt([
        {
          type: 'input',
          name: 'title',
          message: 'Please title your logo file.',
        },        
        {
          type: 'input',
          name: 'text',
          message: 'Please enter up to 3 letters you want to appear on the logo.',
        },            
        {
          type: 'input',
          name: 'textColor',
          message: 'What would you like the text color to be?',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'What shape would you like the logo to be?',
          choices: ['circle', 'triangle', 'square']
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Would would you like the shape color to be?',
        }
      ])
      .then(({title, text, textColor, shape, shapeColor }) => {

        const svg = new SVG();
        svg.setText(text, textColor);
        
        var shape;

        switch (shape) {
            case "square":
                shape = new Square();
                break;
            case "triangle":
                shape = new Triangle();
                break;
            case "circle": 
                shape = new Circle();
                break;
            default:
        }
        shape.setColor(shapeColor);
        svg.setShape(shape);

        return [title, svg.render()];
      })
      .then((resparray) => {
          var path = join(__dirname, '..', 'examples', resparray[0] + '.svg');
          return writeFile(path, resparray[1]);
      })
      .then(() => console.log('Created logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
    }
}
    
module.exports = CLI;
