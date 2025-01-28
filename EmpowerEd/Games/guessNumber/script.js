var result1 = document.querySelector('#result');
var result2 = document.querySelector('#result2');
var result3 = document.querySelector('#result3');
var guesscounter = document.querySelector('#guesscounter');
var streakcounter = document.querySelector('#streakcounter');
var streak = 0;
streakcounter.innerHTML = ' ' + streak;
var scorecounter = document.querySelector('#scorecounter');
var score = 0;
scorecounter.innerHTML = ' ' + score;
var resultimage = document.querySelector('#result');
var input = document.getElementById('guess');

input.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('submit').click();
  }
});

function generate() {
  computerchoice = Math.floor(Math.random() * 20 + 1);
  attempts = 0;
  attemptalert = document.querySelector('#nomoreattempts');
  attemptalert.style.display = 'block';
  numberofattempts = document.querySelector('#attemptcounter');
  numberofattempts.innerHTML = ' ' + attempts + '/15';
  h4 = document.querySelector('#status');
  h4.innerHTML = 'Try To Guess The Whole Number Between 0 And 20.';
  h4.style.fontSize = '21px';
  var guesscounter = document.querySelector('#guesscounter');
  guesscounter.innerHTML = ' ';
  var newgamebutton = document.querySelector('#other');
  newgamebutton.style.display = 'none';
  var inputarea = document.querySelector('#guess');
  inputarea.style.display = 'inline';
  var submitbutton = document.querySelector('#submit');
  submitbutton.style.display = 'inline';
  var giveupbutton = document.querySelector('#giveup');
  giveupbutton.style.display = 'inline';
  attemptalert = document.querySelector('#nomoreattempts');
  attemptalert.innerHTML = 'You Have A Maximum Of 15 Attempts ';
  attemptalert.style.backgroundColor = 'orange';
  attemptalert.style.color = 'navy';
  var statusimage = document.querySelector('#result');
  statusimage.style.backgroundImage =
    "url('https://cdn.pixabay.com/photo/2016/05/28/05/40/question-mark-1421017_960_720.png')";
  result1.style.marginTop = '-10px';
  result2.style.marginTop = '-10px';
  result3.style.marginTop = '-10px';
}
function check() {
  var guess = document.querySelector('#guess').value;
  if (attempts > 13 && guess !== computerchoice) {
    streak = 0;
    streakcounter.innerHTML = ' ' + streak;
    attemptalert = document.querySelector('#nomoreattempts');
    attemptalert.innerHTML =
      'You Ran Out Of Attempts. The Number Was ' +
      computerchoice +
      '. Try Another Number.';
    attemptalert.style.backgroundColor = 'red';
    attemptalert.style.color = 'white';
    var newgamebutton = document.querySelector('#other');
    newgamebutton.style.display = 'block';
    var inputarea = document.querySelector('#guess');
    inputarea.style.display = 'none';
    var submitbutton = document.querySelector('#submit');
    submitbutton.style.display = 'none';
    var giveupbutton = document.querySelector('#giveup');
    giveupbutton.style.display = 'none';
  }
  if (guess == '') {
    h4.innerHTML = 'Type A Guess In The Box Below';
  } else {
    if (computerchoice == guess) {
      attemptalert.style.display = 'none';
      result1.style.marginTop = '75px';
      result2.style.marginTop = '75px';
      result3.style.marginTop = '75px';
      h4.innerHTML =
        'Well Done. You Correctly Guessed That The Number Was ' +
        computerchoice +
        '. Try Another Number.';
      document.querySelector('#scorecounter');
      var guesscounter = document.querySelector('#guesscounter');
      guesscounter.innerHTML += ' ' + guess;
      score++;
      streak++;
      scorecounter.innerHTML = ' ' + score;
      streakcounter.innerHTML = ' ' + streak;
      var inputarea = document.querySelector('#guess');
      inputarea.style.display = 'none';
      var statusimage = document.querySelector('#result');
      statusimage.style.backgroundImage =
        "url('https://www.publicdomainpictures.net/pictures/80000/velka/winners-trophy-clip-art.jpg')";
      var submitbutton = document.querySelector('#submit');
      submitbutton.style.display = 'none';
      var giveupbutton = document.querySelector('#giveup');
      giveupbutton.style.display = 'none';
      var newgamebutton = document.querySelector('#other');
      newgamebutton.style.display = 'block';
    } else if (guess < computerchoice && guess >= 0) {
      h4.innerHTML = 'Too Low...Guess Higher';
      attempts += 1;
      numberofattempts.innerHTML = ' ' + attempts + '/15';
      var statusimage = document.querySelector('#result');
      statusimage.style.backgroundImage =
        "url('https://cdn.pixabay.com/photo/2020/04/12/19/05/yellow-5035413_960_720.png')";
      var guesscounter = document.querySelector('#guesscounter');
      guesscounter.innerHTML += ' ' + guess + ',';
    } else if (guess > computerchoice && guess <= 1000) {
      h4.innerHTML = 'Too High...Guess Lower!';
      attempts += 1;
      numberofattempts.innerHTML = ' ' + attempts + '/15';
      var statusimage = document.querySelector('#result');
      statusimage.style.backgroundImage =
        "url('https://cdn.pixabay.com/photo/2019/05/27/23/45/plane-4234024_960_720.png')";
      var guesscounter = document.querySelector('#guesscounter');
      guesscounter.innerHTML += ' ' + guess + ',';
    }
  }
}
function reveal() {
  if (attempts == 0) {
    streak = 0;
    streakcounter.innerHTML = ' ' + streak;
    h4.innerHTML =
      'Did You Give Up? You Did Not Make Any Attempt To Guess The Number. Anyway, The Number Was ' +
      computerchoice +
      '. Try Another Number.';
    attemptalert.style.display = 'none';
    result1.style.marginTop = '75px';
    result2.style.marginTop = '75px';
    result3.style.marginTop = '75px';
    h4.style.fontSize = '16px';
    var statusimage = document.querySelector('#result');
    statusimage.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2017/08/15/12/58/emoticon-2643814_960_720.jpg')";
    var newgamebutton = document.querySelector('#other');
    newgamebutton.style.display = 'block';
    var inputarea = document.querySelector('#guess');
    inputarea.style.display = 'none';
    var submitbutton = document.querySelector('#submit');
    submitbutton.style.display = 'none';
    var giveupbutton = document.querySelector('#giveup');
    giveupbutton.style.display = 'none';
  } else if (attempts > 0) {
    h4.innerHTML =
      'Did You Give Up? You Onlu Used ' +
      attempts +
      ' Of Your Attempts. Anyway, The Number Was ' +
      computerchoice +
      ' Try Another Number.';
    h4.style.fontSize = '16px';
    attemptalert.style.display = 'none';
    result1.style.marginTop = '75px';
    result2.style.marginTop = '75px';
    result3.style.marginTop = '75px';
    var statusimage = document.querySelector('#result');
    statusimage.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2017/08/15/12/58/emoticon-2643814_960_720.jpg')";
    var newgamebutton = document.querySelector('#other');
    newgamebutton.style.display = 'block';
    var inputarea = document.querySelector('#guess');
    inputarea.style.display = 'none';
    var submitbutton = document.querySelector('#submit');
    submitbutton.style.display = 'none';
    var giveupbutton = document.querySelector('#giveup');
    giveupbutton.style.display = 'none';
  }
}