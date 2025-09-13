const buttonSortition = document.querySelector(".button-sortition");
const numberBetween = document.querySelector(".number-between")
const numberAnd = document.querySelector(".number-and")

let minValue = 0;
let maxValue = 0;

numberBetween.addEventListener("change", () => {
    minValue = Number(numberBetween.value); // pega o valor do input e converte para número
})

numberAnd.addEventListener("change", () => {
    maxValue = Number(numberAnd.value);
});

buttonSortition.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue +1) + minValue)
    const numberSortitionScreen = document.querySelector(".number-sortition-screen")
    numberSortitionScreen.innerHTML = randomNumber
    const digitsNumber = randomNumber.toString().length;
    const sizeNumber = 40 + digitsNumber * 15;

numberSortitionScreen.style.width = `${sizeNumber}px`;
numberSortitionScreen.style.height = "70px";
numberSortitionScreen.style.borderRadius = "40px";
numberSortitionScreen.style.display = "flex"; // mostra o círculo
numberSortitionScreen.style.justifyContent = "center";
numberSortitionScreen.style.alignItems = "center";

// faz os botoes aparecer, limpa os resultados e esconde os botões novamente.
    const buttonClearResult = document.querySelector(".button-clear-result")
    const buttonRefresh = document.querySelector(".button-refresh")

// aparece os botões um do lado do outro.
buttonClearResult.style.display = "inline-block"
buttonRefresh.style.display = "inline-block"

//zera o valor do input
buttonClearResult.addEventListener("click", () => {
numberBetween.value = ""
numberAnd.value = ""

// limpa o resultado.
numberSortitionScreen.innerText = "";
numberSortitionScreen.style.width = "0";
numberSortitionScreen.style.height = "0";
numberSortitionScreen.style.display = "none";

// esconde os botões
buttonClearResult.style.display = "none";
buttonRefresh.style.display = "none";
})

// recarrega a página
buttonRefresh.addEventListener("click", () => {
    window.location.reload();
});
});
  