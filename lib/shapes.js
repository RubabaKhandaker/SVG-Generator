class Shape {
    
    constructor (logoColor){
        this.logoColor = logoColor;
    }

}

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" height="200" width="200" fill="${this.logoColor}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="0,200 300,200 150,0" fill="${this.logoColor}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.logoColor}"/>`;
    }
}

module.exports = { Square, Triangle, Circle };