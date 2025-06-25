const billInput = document.querySelector(".bill");
const tipInput = document.querySelector(".tip");
const button = document.querySelector(".btn");
const container = document.querySelector(".container");
const output = document.createElement("p");

button.addEventListener("click" , () =>{
    const bill = parseFloat(billInput.value);
    const tipPercent = parseFloat(tipInput.value);

if (!bill || !tipPercent || bill <= 0 || tipPercent < 0) {
    output.textContent = "Please enter a valid number";
}else{
    const tipAmount = (tipPercent/100)*bill;
    const total = bill+tipAmount;
    output.textContent = `Total (with tip) : Rs.${total.toFixed(2)}`;
}

 container.appendChild(output);
});
