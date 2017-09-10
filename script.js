var buttonsClass = document.getElementsByClassName('button');
var buttonsNumber = buttonsClass.length;

function buttonsName(){
  for (var i = 0; i < buttonsNumber; i++){
    var buttonSample = buttonsClass[i].innerText;
    console.log(buttonSample);
    }
 }

buttonsName();
