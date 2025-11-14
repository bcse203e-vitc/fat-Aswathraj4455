function calculateMean() {
  const numbers = new Array(5).fill(0).map((_, i) => parseFloat(i));
  return numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
}

function calculateVariance() {
  let variance = 0;
  for (let i = 0; i < numbers.length; i++) {
    variance += Math.pow(parseFloat(numbers[i]) - calculateMean(), 2);
  }
  return variance / numbers.length;
}

function calculateStandardDeviation() {
  const variance = calculateVariance();
  return Math.sqrt(variance);
}

document.addEventListener('DOMContentLoaded', () => {
  const meanBtn = document.getElementById('mean-btn');
  const varianceBtn = document.getElementById('variance-btn');
  const standardDeviationBtn = 
document.getElementById('standard-deviation-btn');
  numbersInput = document.getElementById('numbers');

  stats = calculateMean();
  updateOutput();

  meanBtn.addEventListener('click', () => {
    alert(`The Mean is: ${stats.mean.toFixed(2)}`);
    numbersInput.value = "";
    calculateStats();
  });
  
  varianceBtn.addEventListener('click', () => {
    alert(`The Variance is: ${stats.variance.toFixed(4)}`);
    numbersInput.value = "Variance";
    calculateStats();
  });
  
  standardDeviationBtn.addEventListener('click', () => {
    alert(`The Standard Deviation is: 
${stats.standardDeviation.toFixed(2)}`);
    numbersInput.value = "Standard Deviation";
    calculateStats();
  });
});

function updateOutput() {
  try {
    const output = document.getElementById('output');
    while (output.children.length > 1) {
      output.removeChild(output.children[0]);
    }
    let meanText = `Mean: ${stats.mean.toFixed(2)}, Variance: 
${stats.variance.toFixed(4)}, Standard Deviation: 
${stats.standardDeviation.toFixed(2)}`;
    updateOutputElement(meanText);
  } catch (error) {
    console.error(error);
  }
}

function updateOutputElement(text) {
  document.getElementById('output').innerText = text;
}
