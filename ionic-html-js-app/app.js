const calculateBtn = document.getElementById('calc-button');
const resetBtn = document.getElementById('reset-button');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');

const result = document.getElementById('result');

const resetInputs = () => {
  heightInput.value = '';
  weightInput.value = '';
};

const calculateBmi = () => {
  const enteredHeight = heightInput.value;
  const enteredWeight = weightInput.value;

  const bmi = enteredWeight / (enteredHeight * enteredHeight);

  if (isNaN(bmi)) {
    return;
  }

  const resultElement = document.createElement('ion-card');
  resultElement.innerHTML = `
  <ion-card-content>
  <h2>${bmi}</h2>
  </ion-card-content>
  `;

  result.innerHTML = '';
  result.appendChild(resultElement);
};

calculateBtn.addEventListener('click', calculateBmi);

resetBtn.addEventListener('click', resetInputs);
