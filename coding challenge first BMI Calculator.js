var johnHeight, johnMass, markHeight, markMass, greater, marksBmi, johnBmi;
johnHeight = 3;
johnMass = 90;
markHeight = 3;
markMass = 190;
johnBmi = johnMass / johnHeight^2;
marksBmi = markMass / markHeight^2;
if (marksBmi > johnBmi) {
    greater = true;
    console.log('is mark^s BMI greater than john^s BMI' + ' ' + greater + ' ' + '. Becuase Mark^s Bmi is ' + marksBmi + " which is greater than john^s Bmi which is " + johnBmi);
} else if (marksBmi < johnBmi)
 {
    greater = false;
    console.log('is mark^s BMI greater than john^s BMI' + ' ' + greater);
}
else
{
    console.log('Both have equal BMI' + ' ' + marksBmi);
}
