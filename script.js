const inputvalue = document.querySelectorAll(".inputValue");
const showbtn = document.querySelector("#show"); 
const outputbox = document.querySelector("#outputbox")


showbtn.addEventListener("click", () => {
    let sum = CalculateAngle(Number(inputvalue[0].value), Number(inputvalue[1].value), Number(inputvalue[2].value))
    showOutput(sum)
})


function CalculateAngle(angleOne, angleTwo, angleThree) {
    let sumofAngle = angleOne + angleTwo + angleThree;
    return sumofAngle
}

function showOutput(sum) {
    if (sum === 180) {
        outputbox.innerHTML="Yas its  Triangle"
    } else {
        outputbox.innerHTML="Oh No its Not a Triangle. sum should be 180"
    }
};
