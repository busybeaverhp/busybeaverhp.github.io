function initializeEverything() {
    initializeQ4();
    initializeQ5Q6Q7Q8();
}
function ReturnRandomValue(lowerBoundInc, upperBoundExcl) {
    var rngRange = (upperBoundExcl - lowerBoundInc) - 1;
    var rngFloor = parseInt(lowerBoundInc);
    var rngValue;

    rngValue = Math.round(Math.random() * rngRange) + rngFloor;
    return rngValue;
}

// Question 4 Variables
var numberSet = [];
var outputSet = [];
var rngDisplayArea;

// Question 4 Functions
function initializeQ4() {
    for (var i = 1; i <= 45; i++)
        numberSet.push(i);

    rngDisplayArea = document.getElementById("displayrng");
}
function generateDistinctRandomSet(sourceSet, sizeOfFinalSet) {
    var workingInstanceSet = [];
    var finalSet = [];

    for (var i = 0; i < sourceSet.length; i++)
        workingInstanceSet[i] = sourceSet[i];

    // The requirements stated 6 distinct random values, so I used the Yates-Fischer draw method.
    for (var i = 0; i < sizeOfFinalSet; i++) {
        var randomIndex = ReturnRandomValue(0, workingInstanceSet.length);
        finalSet.push(workingInstanceSet[randomIndex]);
        workingInstanceSet.splice(randomIndex, 1);
    }

    return finalSet;
}
function clickToGenerateRandomNumbers(numbers) {
    outputSet = generateDistinctRandomSet(numberSet, numbers);

    for (var i = 0; i < outputSet.length; i++)
        rngDisplayArea.innerHTML += outputSet[i] + "\t";
}
function clearQ4DisplayArea() {
    rngDisplayArea.innerHTML = "Output: ";
}

// Question 5 Variables
var cars = ["Toyota", "Honda", "Tesla", "Ford", "Chevy", "Volvo"];
var prices = [ReturnRandomValue(2000, 3000),
                ReturnRandomValue(2000, 6000),
                ReturnRandomValue(2000, 9000),
                ReturnRandomValue(2000, 9000),
                ReturnRandomValue(2000, 6000),
                ReturnRandomValue(2000, 3000)];
var carDisplayArea;
var priceDisplayArea;

// Question 5 Functions
function initializeQ5Q6Q7Q8() {
    carDisplayArea = document.getElementById("cararraydisplay");
    priceDisplayArea = document.getElementById("pricearraydisplay");
}
function clearQ5DisplayArea() {
    carDisplayArea.innerHTML = "";
    priceDisplayArea.innerHTML = "";
}

// Question 6 Function
function displayCarAndPrice() {

    carDisplayArea.innerHTML = "";
    priceDisplayArea.innerHTML = "";

    for (var i = 0; i < cars.length; i++) {
        carDisplayArea.innerHTML += cars[i] + "<br />";
        priceDisplayArea.innerHTML += "$" + prices[i] + ".00<br />";
    }
}

// Question 7 Function
function getHighestPrice() {
    return Math.max(...prices);
}

// Question 8 Function
function displayMostExpensiveCar() {
    var highestPrice = getHighestPrice();
    var indexOfHighestPrice;

    for (var i = 0; i < prices.length; i++)
        if (prices[i] == highestPrice)
            indexOfHighestPrice = i;

    carDisplayArea.innerHTML = cars[indexOfHighestPrice] + "<br />";
    priceDisplayArea.innerHTML = "$" + prices[indexOfHighestPrice] + ".00<br />";
}

// Question 9 Variables
var selectedComponents = [];
var cpuSpeed;

// Question 9 Function
function getSelectedComponents() {
    var form = document.getElementById("components");
    var inputs = form.getElementsByTagName("input");

    for (var i = 0; i < inputs.length; i++)
        if (inputs[i].type == "checkbox" && inputs[i].checked)
            selectedComponents.push(inputs[i].value);
    return false;
}
function getSelectedCPUSpeed() {
    var radioCPUType = document.getElementsByName("cpuspeed");

    for (var i = 0; i < radioCPUType.length; i++)
        if (radioCPUType[i].type == "radio" && radioCPUType[i].checked) {
            cpuSpeed = radioCPUType[i].value;
            break;
        }
    return false;
}
function displayUserChoice() {
    selectedComponents = [];
    getSelectedComponents();
    getSelectedCPUSpeed();

    var strSelectedComponents = "";
    for (var i = 0; i < selectedComponents.length; i++) {
        strSelectedComponents += selectedComponents[i] + "\n";
    }
    alert("Your chosen processor speed is " + cpuSpeed +
        "\n With the following additional components" +
        "\n" +
        strSelectedComponents);

    return false;
}

// Question 10 Function
function rollDice() {
    document.getElementById("imagea").src = "images/" + ReturnRandomValue(1, 7) + ".gif";
    setTimeout(100);
    document.getElementById("imageb").src = "images/" + ReturnRandomValue(1, 7) + ".gif";
}
function rollDiceEveryInterval(ms) {
    setInterval(rollDice, ms);
}
function disableQ10Button() {
    var btn = document.getElementById("btnrolldice");
    btn.disabled = true;
}