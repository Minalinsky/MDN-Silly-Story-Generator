
var customName = document.getElementById('nome');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  var random = Math.floor(Math.random()*array.length);
  return array[random];
}

var completeText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
var insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
var insertY = ['the soup kitchen','Disneyland','the White House'];
var insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  var generatedStory = completeText; // generatedStory é o newStory do enunciado
  var x = randomValueFromArray(insertX); //xItem dado no enunciado
  var y = randomValueFromArray(insertY); //yItem dado no enunciado
  var z = randomValueFromArray(insertZ); //zItem dado no enunciado

  generatedStory = generatedStory.replace(':insertx:',x);
  generatedStory = generatedStory.replace(':insertx:',x);
  generatedStory = generatedStory.replace(':inserty:',y);
  generatedStory = generatedStory.replace(':insertz:',z);

  if(customName.value !== '') {
    var name = customName.value;
    generatedStory = generatedStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300*0.0714286) + ' stone';
    var temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    generatedStory = generatedStory.replace('94 fahrenheit',temperature);
    generatedStory = generatedStory.replace('300 pounds',weight);
  }

  story.textContent = generatedStory;
  story.style.visibility = 'visible';
}