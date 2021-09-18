const inputValue = document.querySelectorAll(".inputValue");
const show = document.querySelector("#show");
const outputbox = document.querySelector("#outputbox");


show.addEventListener("click", () => {
    let ans = CalAreaoftriangle(Number(inputValue[0].value), Number(inputValue[1].value))
    console.log(ans)
    outputbox.innerHTML = `Area of triangle is ${ans}`
})

function CalAreaoftriangle(base,height) {
    let calc = ((base * height)/2)
    return calc

  }
