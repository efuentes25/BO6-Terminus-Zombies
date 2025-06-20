// Initialize variables for x, y, and z
let x, y, z;
const maxSelections = 3;

// Select all buttons and results display elements
const buttons = document.querySelectorAll(".number-button");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const result3 = document.getElementById("result3");

// Function to reset selections and results
function reset() {
  x = y = z = null;
  buttons.forEach(button => button.classList.remove("active"));
  result1.innerText = "N/A";
  result2.innerText = "N/A";
  result3.innerText = "N/A";
}

// Function to update the results based on x, y, and z
function updateResults() {
  if (x !== undefined && y !== undefined && z !== undefined) {
    result1.innerText = 2 * x + 11;
    result2.innerText = (2 * z + y) - 5;
    result3.innerText = Math.abs((y + z) - x);
  }
}

// Add click event listener to each button
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = parseInt(button.getAttribute("data-value"));

    // Check if x, y, and z are already set
    if (x === undefined) {
      x = value;
      button.classList.add("active");
    } else if (y === undefined) {
      y = value;
      button.classList.add("active");
    } else if (z === undefined) {
      z = value;
      button.classList.add("active");
      updateResults();
    } else {
      // If all variables are set, reset and start over
      reset();
    }
  });
});
