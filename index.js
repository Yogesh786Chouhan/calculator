const screen = document.getElementById("screen");
const button = document.querySelectorAll("button");


let string = "";


button.forEach(number => {
    number.addEventListener('click', (event) => {
        // alert(event.target.innerText)
        let btnText = event.target.innerText;
        screen.value += btnText;


        if (btnText == "AC") {
            string = "";
            screen.value = string;
        }
        else if (btnText == "Sqrt") {
            string = Math.sqrt(string);
            screen.value = string;
        }
        else if (btnText == "=") {
            string = eval(string)
            screen.value = string;

        }
        else if (btnText == "C") {
            string = string.toString().slice(0, -1);
            screen.value = string;
        }
        else if (btnText == "AC") {
            string = btnText;
            screen.value = string;

        }
        else {
            string += btnText;
            screen.value = string;

        }
    })
})