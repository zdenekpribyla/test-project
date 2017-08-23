var getValues = function () {
    // console.log('moje - getValues()');
    return {
        numberOfPassangers: Number(document.getElementById('num-pass-input').value),
        gasPrice: Number(document.getElementById('gas-price-input').value),
        averageConsumption: Number(document.getElementById('average-consumption-input').value),
        totalDistance: Number(document.getElementById('total-distance-input').value)
    }
};

var validate = function (inputData) {

  if (inputData.numberOfPassangers <= 0 || inputData.gasPrice <= 0 || inputData.averageConsumption <= 0 || inputData.totalDistance <= 0) {
    console.log('validate: nekde je 0')
    console.log('validate: nekde je zaporne cislo');
    return false
  }

  else {
    console.log('validate: vse OK')
    return true
  }
}


var calculate = function (inputData) {
    //console.log('moje - calculate()');
    var result = (((inputData.totalDistance / 100) * inputData.gasPrice * inputData.averageConsumption)
        / inputData.numberOfPassangers);
    console.log(result);
    var wayBack = function () {
        if (document.getElementById('way-back-input').checked) {
            return result * 2
        }
        else {
            return result
        }
    };

    document.getElementById('display-result-value').innerHTML = 'Everybody will pay ' + Math.round(wayBack() * 100) / 100 + ' CZK.'


};

//spusteni calculate pres click na button
var button = document.getElementById('button-click');
//console.log(button);

button.addEventListener('click', function () {
  run()
});

//loop for inputs class instead of id

var inputsAll = document.getElementsByClassName('inputs-field');  //create a field
//console.log('tady je inputs all', inputsAll);

for (var index = 0; index < inputsAll.length; ++index) {
    // console.log('zavolal jsem for loop')

    // console.log('index je ted:', index)

    var singleInputElement = inputsAll[index];
    // console.log('pres index jsem si vytahl z pole singleInputElement ktery je: ', singleInputElement);

    singleInputElement.addEventListener('keypress', function (event) {
        var key = event.keyCode;
        if (key === 13) {
          run()
        }
        // console.log('event: ', event);
    });

}

var run = function () {
  var inputData = getValues()

  if(validate(inputData)) {
    calculate(inputData)
  } else {
    alert('There is some input data error')
  }
}


//wayBack input
var wayBackElement = document.getElementById('way-back-input');
wayBackElement.addEventListener('click', function (event) {
    calculate(getValues())
});

