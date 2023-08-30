function calculateBMI(weight, height) {
    var bmi = weight / (height ** 2);
    return bmi;
}

function interpretBMI(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

var weight = parseFloat(prompt("Please enter your weight in kilograms: "));
var height = parseFloat(prompt("Please enter your height in meters: "));

var bmi = calculateBMI(weight, height);
var description = interpretBMI(bmi);

console.log("Your BMI value is: " + bmi);
console.log("The corresponding description for your BMI is: " + description);