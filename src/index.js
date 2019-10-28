const board = new Board();
const TicTacToeGame = new TicTacToe();
TicTacToeGame.start();

function TicTacToe() {
  const player1 = new Player1(board);
  const player2 = new Player2(board);
  let turn = 1;

  const restartButton = document.getElementById("restartButton");
  restartButton.addEventListener("mousedown", event => {
    buttonActivities();
    event.stopPropagation();
  });
  function buttonActivities() {
    console.log("Game restarted");
    turn = 1;
    var x = document.getElementsByTagName("td");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].innerHTML = "";
      x[i].style.backgroundColor = "white";
    }
  }

  this.start = function() {
    const config = { childList: true };
    const observer = new MutationObserver(() => takeTurn());
    board.positions.forEach(el => observer.observe(el, config));
    takeTurn();
  };
  function takeTurn() {
    if (turn % 2 === 0) {
      let player = "1";
      if (checkForWinner(board, player)) {
        buttonActivities();
      }

      player1.takeTurn();
      turn++;
    } else {
      let player = "2";
      if (checkForWinner(board, player)) {
        buttonActivities();
      }
      player2.takeTurn();
      turn++;
    }
  }
}

function checkForWinner(board, player) {
  var win = false;
  var pos = board.positions;
  if (
    pos[0].innerText !== "" &&
    pos[0].innerText === pos[1].innerText &&
    pos[1].innerText === pos[2].innerText &&
    pos[2].innerText === pos[3].innerText &&
    pos[3].innerText === pos[4].innerText
  ) {
    alert("Player " + player + " won!");
    win = true;
  } else if (
    pos[5].innerText !== "" &&
    pos[5].innerText === pos[6].innerText &&
    pos[6].innerText === pos[7].innerText &&
    pos[7].innerText === pos[8].innerText &&
    pos[8].innerText === pos[9].innerText
  ) {
    alert("Player " + player + " won!");
    win = true;
  } else if (
    pos[10].innerText !== "" &&
    pos[10].innerText === pos[11].innerText &&
    pos[11].innerText === pos[12].innerText &&
    pos[12].innerText === pos[13].innerText &&
    pos[13].innerText === pos[14].innerText
  ) {
    alert("Player " + player + " won!");
    win = true;
  } else if (
    pos[15].innerText !== "" &&
    pos[15].innerText === pos[16].innerText &&
    pos[16].innerText === pos[17].innerText &&
    pos[17].innerText === pos[18].innerText &&
    pos[18].innerText === pos[19].innerText
  ) {
    alert("Player " + player + " won!");
    win = true;
  } else if (
    pos[20].innerText !== "" &&
    pos[20].innerText === pos[21].innerText &&
    pos[21].innerText === pos[22].innerText &&
    pos[22].innerText === pos[23].innerText &&
    pos[23].innerText === pos[24].innerText
  ) {
    alert("Player " + player + " won!");
    win = true;
  } else if (
    pos[0].innerText !== "" &&
    pos[0].innerText === pos[5].innerText &&
    pos[5].innerText === pos[10].innerText &&
    pos[10].innerText === pos[15].innerText &&
    pos[15].innerText === pos[20].innerText
  ) {
    alert("Player " + player + " won!");
    win = true;
  } else if (
    pos[1].innerText !== "" &&
    pos[1].innerText === pos[6].innerText &&
    pos[6].innerText === pos[11].innerText &&
    pos[11].innerText === pos[16].innerText &&
    pos[16].innerText === pos[21].innerText
  ) {
    alert("Player " + player + " won!");
    win = true;
  } else if (
    pos[2].innerText !== "" &&
    pos[2].innerText === pos[7].innerText &&
    pos[7].innerText === pos[12].innerText &&
    pos[12].innerText === pos[17].innerText &&
    pos[17].innerText === pos[22].innerText
  ) {
    alert("Player " + player + " won!");
    win = true;
  } else if (
    pos[3].innerText !== "" &&
    pos[3].innerText === pos[8].innerText &&
    pos[8].innerText === pos[13].innerText &&
    pos[13].innerText === pos[18].innerText &&
    pos[18].innerText === pos[23].innerText
  ) {
    alert("Player " + player + " won!");
    win = true;
  } else if (
    pos[4].innerText !== "" &&
    pos[4].innerText === pos[9].innerText &&
    pos[9].innerText === pos[14].innerText &&
    pos[14].innerText === pos[19].innerText &&
    pos[19].innerText === pos[24].innerText
  ) {
    alert("Player " + player + " won!");
    win = true;
  } else if (
    pos[0].innerText !== "" &&
    pos[0].innerText === pos[6].innerText &&
    pos[6].innerText === pos[12].innerText &&
    pos[12].innerText === pos[18].innerText &&
    pos[18].innerText === pos[24].innerText
  ) {
    alert("Player " + player + " won!");
    win = true;
  } else if (
    pos[4].innerText !== "" &&
    pos[4].innerText === pos[8].innerText &&
    pos[8].innerText === pos[12].innerText &&
    pos[12].innerText === pos[16].innerText &&
    pos[16].innerText === pos[20].innerText
  ) {
    alert("Player " + player + " won!");
    win = true;
  }
  return win;
}

function Player1(board) {
  this.takeTurn = function() {
    board.positions.forEach(el =>
      el.addEventListener("click", handleTurnTaken)
    );
  };
  function handleTurnTaken(event) {
    event.target.innerText = "X";
    event.target.style.backgroundColor = "rgb(250, 128, 114)";
    board.positions.forEach(el =>
      el.removeEventListener("click", handleTurnTaken)
    );
  }
}
function Player2(board) {
  this.takeTurn = function() {
    board.positions.forEach(el =>
      el.addEventListener("click", handleTurnTaken)
    );
  };
  function handleTurnTaken(event) {
    event.target.innerText = "O";
    event.target.style.backgroundColor = "rgb(124, 252, 0)";
    board.positions.forEach(el =>
      el.removeEventListener("click", handleTurnTaken)
    );
  }
}

function Board() {
  for (var j = 0; j < 5; j++) {
    var tr = document.createElement("tr");
    for (var i = 0; i < 5; i++) {
      var td = document.createElement("td");
      td.className = "cell";
      tr.appendChild(td);
      document.getElementById("board").appendChild(tr);
    }
  }
  this.positions = Array.from(document.querySelectorAll(".cell"));
}
