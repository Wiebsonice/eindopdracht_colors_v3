
var colors = ['red',
    'green',
    'blue',
    'orange',
    'purple'
];
var score = 0;
var lives = 5;
var time = 60;
var aantalWoorden = 3;
var i;
var endGame = false;
var refresh = document.querySelector('#refresh');
var scoreText = document.querySelector('#score');
var livesText = document.querySelector('#lives');

var boxOne = document.querySelector('#box1');
var boxTwo = document.querySelector('#box2');
var boxThree = document.querySelector('#box3');

var start = document.querySelector('#hide');
var opnieuw = document.querySelector('#opnieuw');
var instructie = document.querySelector('.instructie');
var endScore = document.querySelector('#endscore');
var gameOver = document.querySelector('.gameover');
var mask = document.querySelector('.mask');




refresh.addEventListener("click", function() {
    game();
});

function game() {
    for (var i = 0; i < aantalWoorden; i++) {

        var wordBox = document.getElementsByClassName('box')[i];
        wordBox.classList.remove("red", "green", "blue", "orange", "purple","match");

        generateBoxes(Math.floor(Math.random() * 5), Math.floor(Math.random() * 5));

    }

    function generateBoxes(a, b) {
        var wordBox = document.getElementsByClassName('box')[i];
        if (a === b) {
            wordBox.classList.add("match");
            wordBox.innerHTML = colors[b];
            wordBox.classList.add(colors[a]);
        } else {
            wordBox.innerHTML = colors[b];
            wordBox.classList.add(colors[a]);
        }
    }
};



boxOne.addEventListener("click", function() {
    checkMatches(boxOne);
    game();
});

boxTwo.addEventListener("click", function() {
    checkMatches(boxTwo);
    game();
});

boxThree.addEventListener("click", function() {
    checkMatches(boxThree);
    game();
});

function checkMatches(a) {
    if (a.classList.contains('match')) {
        score += 1;
        scoreText.innerHTML = "Your score: " + score;
    } else {
        lives -= 1;
        livesText.innerHTML = "Your lives: " + lives;
        if (lives < 1) {
            runClick();
        }
    };
}

function runClick() {
    timer.innerHTML = time + "s left!";
    endScore.innerHTML = "Je hebt de score: " + score + " Behaald!";
    scoreText.innerHTML = "Your score: 0";
    livesText.innerHTML = "Your lives: 5";
    gameOver.classList.remove("hide");
    mask.classList.remove("hide");
    time = 60;
    lives = 5;
    score = 0;
    endGame = true;
}



start.addEventListener("click", popupStarter);
opnieuw.addEventListener("click", popupStarter);

function popupStarter(){
    mask.classList.add("hide");
    gameOver.classList.add("hide");
    instructie.classList.add("hide");
    startTimer();
    game();

}


function startTimer() {
    var x = setInterval(function() {
        time--;
        timer.innerHTML = time + "s left!";

        if (time < 1 || endGame == true) {
            clearInterval(x);
            timer.innerHTML = time + "s left!";
            endScore.innerHTML = "Je hebt de score: " + score + " Behaald!";
            gameOver.classList.remove("hide");
            time = 60;
            endGame = false;
        }
    }, 1000);
}
