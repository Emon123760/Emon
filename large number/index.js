
function findLargest() {
    let numbers = document.getElementById("numbers").value.split(",").map(Number);
    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    document.getElementById("result").innerHTML = "Largest number is: " + largest;
}

