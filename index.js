const fs = require("fs");
const jest = require("jest");
const inquirer = require("inquirer");

const questions = [
    "What shape would you like your logo to be?",

    "What color would you like your shape to be?",

    "Please enter in 3 characters you would like to display on your logo",
]

function init() {
    inquirer.prompt([
        {
            type: "checkbox",
            message: questions[0],
            name: "shape",
            choices: ["Square", "Circle", "Triangle"]
        },
        {
            type: "input",
            message: questions[1],
            name: "color"
        },
        {
            type: "input",
            message: questions[2],
            name: "name",
            validate: true
        }
    ])
    .then((answers) => {
        fs.writeFile("index.html", logomaker(answers), err =>
        err ? console.error(err) : console.log('Logo created!')
        );
    })
}

function logomaker(answers) {
    let svg;

    if (answers.shape === "Circle") {
        svg = new Circle(answers.text, answers.color)
    } else if (answers.shape === "Square") {
        svg = new Square(answers.text, answers.color)
    } else if (answers.shape === "Triangle") {
        svg = new Triangle(answers.text, answers.color)
    } else {
        return null //console.log()
    }

    return input.rendershape()
}
