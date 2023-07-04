class Square {
    constructor (color, text) {
        this.color = color;
        this.text = text
    }
}

class Circle {
    constructor (color, text) {
        this.color = color;
        this.text = text
    }

    rendershape() {
        return `<svg width="100" height="100">
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
}
