document.querySelector("#boton").addEventListener("click", (e) => {
    console.log("Hola mundo!!");
    console.log(e);
});

document.querySelector("#mouse").addEventListener("click", () => {
    console.log("mouse click");
});

document.querySelector("#mouse").addEventListener("mouseover", () => {
    console.log("mouse sobre");
});

document.querySelector("#mouse").addEventListener("mouseout", () => {
    console.log("mouse fuera");
});

document.querySelector("#mouse").addEventListener("mousedown", () => {
    console.log("mouse apretado");
});

document.querySelector("#mouse").addEventListener("mouseup", () => {
    console.log("mouse soltado");
});

document.querySelector("#mouse").addEventListener("wheel", () => {
    console.log("Rueda del mouse");
});