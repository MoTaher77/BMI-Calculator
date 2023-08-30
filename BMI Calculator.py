def calculate_bmi(weight, height):
    bmi = weight / (height**2)
    return bmi

def interpret_bmi(bmi):
    if bmi < 18.5:
        return "Underweight"
    elif 18.5 <= bmi < 25:
        return "Normal weight"
    elif 25 <= bmi < 30:
        return "Overweight"
    else:
        return "Obese"

weight = float(input("Please enter your weight in kilograms: "))
height = float(input("Please enter your height in meters: "))

bmi = calculate_bmi(weight, height)
description = interpret_bmi(bmi)

print("Your BMI value is:", bmi)
print("The corresponding description for your BMI is:", description)