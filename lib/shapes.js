class Shape {}

class Square extends Shape {
    render() {
        return `<rect " />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon " />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle " />`;
    }
}

module.exports = { Square, Triangle, Circle };