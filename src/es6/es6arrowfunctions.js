class Header {
    constructor() {
        this.color = "red";
    }
    changeColor = () => {
        document.getElementById("demo").innerHTML += this;
    }
}

const myHeader = new Header();

window.addEventListener("load", myheader.changeColor);

document.getElementById("btn").addEventListener("click", myheader.changeColor);