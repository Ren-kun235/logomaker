// Square constructor that is called to generate a square logo
class Square {
    constructor (text, color) {
        this.text = text;
        this.color = color; 
    }

    rendershape() {
        return `
        <style>
            text {
                    font-size: 24px;
                    font-weight: bold;
                    font-family: "Times New Roman";
                };
        </style>
        
        <svg id="square" width="100" height="100">
            <rect width="100" height="100" stroke-width="4" fill=${this.color} />
            <text text-anchor="middle" x="50" y="60">
                ${this.text}
            </text>
        </svg>
        `
    }
}

// Circle constructor that is called to generate a Circle logo
class Circle {
    constructor (text, color) {
        this.color = color;
        this.text = text
    }

    rendershape() {
        return `
        <style>
        text {
                font-size: 24px;
                font-weight: bold;
                font-family: "Times New Roman";
            };
        </style>
        
        <svg id="circle" width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke-width="4" fill=${this.color} />
            <text text-anchor="middle" x="50" y="55">
                ${this.text}
            </text>
        </svg>
        `
    }
}

// Triangle constructor that is called to generate a Triangle logo
class Triangle {
    constructor (text, color) {
        this.color = color;
        this.text = text
    }

    rendershape() {
        return `
        <style>
        text {
                font-size: 24px;
                font-weight: bold;
                font-family: "Times New Roman";
            };
        </style>
        
        <svg id="triangle width="100" height="100">
            <polygon points="50 15, 100 100, 0 100" stroke-width="4" fill=${this.color} />
            <text text-anchor="middle" x="50" y="80">
                ${this.text}
            </text>
        </svg>
        `
    }
}

module.exports = { Circle, Square, Triangle }