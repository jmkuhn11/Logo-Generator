const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const SVG = require('./svg.js');
const { Square, Triangle, Circle } = require("./shapes");

class CLI {
    constructor() {
      this.title = '';
      this.svg = '';
    }
    run() {
      return inquirer
        .prompt([
          {
            type: 'input',
            name: 'title',
            message: 'Please title your logo file.',
          },
        ])
        .then(({ title }) => {
          this.title = title;
          return this.createLogo();
        })
        .then(() => {
            var path = join(__dirname, '..', 'examples', `${this.title}.svg`);
            return writeFile(path, this.svg);
        })
        .then(() => console.log('Created logo.svg'))
        .catch((err) => {
          console.log(err);
          console.log('Oops. Something went wrong.');
        });
    }

    createLogo() {
        return inquirer
          .prompt([
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
          .then(({ text, textColor, shape, shapeColor }) => {

            const svg = new SVG();
            svg.setColor(shapeColor);
            svg.setText(text, textColor);

            switch (shape) {
                case "square":
                    svg.setShape(new Square());
                    break;
                case "triangle":
                    svg.setShape(new Triangle());
                    break;
                case "circle": 
                    svg.setShape(new Circle());
                    break;
                default:
            }

            this.svg = svg.render();
            return svg.render();

          });
      }
    }

    module.exports = CLI;
