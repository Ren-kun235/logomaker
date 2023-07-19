class Square {
    constructor (color, text) {
        this.color = color;
        this.text = text
    }

    rendershape() {
        return `<svg id="square" width="100" height="100">
            <rect width="100" height="100" stroke-width="4" fill=${this.color} />
            <text>
                ${this.text}
            </text>
        </svg>
        `
    }
}

class Circle {
    constructor (color, text) {
        this.color = color;
        this.text = text
    }

    rendershape() {
        return `<svg id="circle" width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke-width="4" fill=${this.color} />
            <text>
                ${this.text}
            </text>
        </svg>
        `
    }
}

class Triangle {
    constructor (color, text) {
        this.color = color;
        this.text = text
    }

    rendershape() {
        return `<svg id="triangle width="100" height="100">
            <polygon points="50 15, 100 100, 0 100" stroke-width="4" fill=${this.color} />
            <text>
                ${this.text}
            </text>
        </svg>
        `
    }
}
