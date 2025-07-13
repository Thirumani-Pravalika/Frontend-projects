let changecolor = document.querySelector("#changecolor");
let currMode = "light";

changecolor.addEventListener("click", () => {
    let newColor;

    if (currMode === "light") {
        currMode = "dark";
        newColor = "orange";
    } else {
        currMode = "light";
        newColor = "lightgreen";
    }
     
    document.body.style.backgroundColor = newColor;
    document.querySelector("#colorcode").innerText = "Current Color: " + newColor;
    console.log("Mode:", currMode);
});
