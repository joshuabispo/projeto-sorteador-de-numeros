const buttonSortition = document.querySelector(".button-sortition");
const numberBetween = document.querySelector(".number-between");
const numberAnd = document.querySelector(".number-and");
const numberSortitionScreen = document.querySelector(".number-sortition-screen");
const buttonClearResult = document.querySelector(".button-clear-result");
const buttonRefresh = document.querySelector(".button-refresh");

let minValue = 0;
let maxValue = 0;

// Atualiza minValue quando o input muda
numberBetween.addEventListener("change", () => {
    minValue = Number(numberBetween.value);
});

// Atualiza maxValue quando o input muda
numberAnd.addEventListener("change", () => {
    maxValue = Number(numberAnd.value);
});

// Botão Sortition
buttonSortition.addEventListener("click", () => {
    const minInput = Number(numberBetween.value);
    const maxInput = Number(numberAnd.value);

    // Validação 1: inputs vazios
    if (numberBetween.value === "" || numberAnd.value === "") {
        alert("Por favor, preencha ambos os números!");
        return;
    }

    // Validação 2: min maior que max
    if (minInput > maxInput) {
        alert("O número mínimo não pode ser maior que o máximo!");
        return;
    }

    // Atualiza os valores
    minValue = minInput;
    maxValue = maxInput;

    // Gera o número aleatório
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
    numberSortitionScreen.innerHTML = randomNumber;

    const digitsNumber = randomNumber.toString().length;
    const sizeNumber = 40 + digitsNumber * 15;

    numberSortitionScreen.style.width = `${sizeNumber}px`;
    numberSortitionScreen.style.height = "70px"; // mantém como estava
    numberSortitionScreen.style.borderRadius = "40px"; // mantém como estava
    numberSortitionScreen.style.display = "flex";
    numberSortitionScreen.style.justifyContent = "center";
    numberSortitionScreen.style.alignItems = "center";

    // Mostra os botões
    buttonClearResult.style.display = "inline-block";
    buttonRefresh.style.display = "inline-block";
});

// Botão Limpar
buttonClearResult.addEventListener("click", () => {
    numberBetween.value = "";
    numberAnd.value = "";

    minValue = 0;
    maxValue = 0;

    numberSortitionScreen.innerText = "";
    numberSortitionScreen.style.width = "0";
    numberSortitionScreen.style.height = "0";
    numberSortitionScreen.style.display = "none";

    buttonClearResult.style.display = "none";
    buttonRefresh.style.display = "none";
});

// Botão Recarregar
buttonRefresh.addEventListener("click", () => {
    window.location.reload();
});
