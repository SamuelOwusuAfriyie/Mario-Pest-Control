var goombaAdd = document.querySelector("#add");
goombaAdd.addEventListener("click", function() {
  var goombaSquashed = document.querySelector("#numGoom");
  var goombaEarned = document.querySelector("#amountGoom");
  var goombaSquashedValue = parseInt(goombaSquashed.textContent);
  var goombaEarnedValue = parseInt(goombaEarned.textContent);
  document.querySelector("#numGoom").innerHTML = goombaSquashedValue + 1;
  document.querySelector("#amountGoom").innerHTML = goombaEarnedValue + 5;
  var totalGomba = document.querySelector("#answer");
  var totalGombaValue = parseInt(totalGomba.textContent);
  document.querySelector("#answer").innerHTML = totalGombaValue + 5;
});

var goombaSub = document.querySelector("#sub");
goombaSub.addEventListener("click", function() {
  var goombaSquashed = document.querySelector("#numGoom");
  var goombaEarned = document.querySelector("#amountGoom");
  var goombaSquashedValue = parseInt(goombaSquashed.textContent);
  var goombaEarnedValue = parseInt(goombaEarned.textContent);
  document.querySelector("#numGoom").innerHTML = goombaSquashedValue - 1;
  document.querySelector("#amountGoom").innerHTML = goombaEarnedValue - 5;
  var totalGomba = document.querySelector("#answer");
  var totalGombaValue = parseInt(totalGomba.textContent);
  document.querySelector("#answer").innerHTML = totalGombaValue - 5;
});

var boombsAdd = document.querySelector("#Bo-ombsAdd");
boombsAdd.addEventListener("click", function() {
  var boombsSquashed = document.querySelector("#numBo");
  var boombsEarned = document.querySelector("#amountBo");
  var boombsSquashedValue = parseInt(boombsSquashed.textContent);
  var boombsEarnedValue = parseInt(boombsEarned.textContent);
  document.querySelector("#numBo").innerHTML = boombsSquashedValue + 1;
  document.querySelector("#amountBo").innerHTML = boombsEarnedValue + 7;
  var totalboombs = document.querySelector("#answer");
  var totalboombsValue = parseInt(totalboombs.textContent);
  document.querySelector("#answer").innerHTML = totalboombsValue + 7;
});

var boombsAdd = document.querySelector("#Bo-ombsSub");
boombsAdd.addEventListener("click", function() {
  var boombsSquashed = document.querySelector("#numBo");
  var boombsEarned = document.querySelector("#amountBo");
  var boombsSquashedValue = parseInt(boombsSquashed.textContent);
  var boombsEarnedValue = parseInt(boombsEarned.textContent);
  document.querySelector("#numBo").innerHTML = boombsSquashedValue - 1;
  document.querySelector("#amountBo").innerHTML = boombsEarnedValue - 7;
  var totalboombs = document.querySelector("#answer");
  var totalboombsValue = parseInt(totalboombs.textContent);
  document.querySelector("#answer").innerHTML = totalboombsValue - 7;
});

var cheepsAdd = document.querySelector("#cheepadd");
cheepsAdd.addEventListener("click", function() {
  var cheepsSquashed = document.querySelector("#numcheeps");
  var cheepsEarned = document.querySelector("#amountcheeps");
  var cheepsSquashedValue = parseInt(cheepsSquashed.textContent);
  var cheepsEarnedValue = parseInt(cheepsEarned.textContent);
  document.querySelector("#numcheeps").innerHTML = cheepsSquashedValue + 1;
  document.querySelector("#amountcheeps").innerHTML = cheepsEarnedValue + 11;
  var totalcheeps = document.querySelector("#answer");
  var totalcheepsValue = parseInt(totalcheeps.textContent);
  document.querySelector("#answer").innerHTML = totalcheepsValue + 11;
});


var cheepsSub = document.querySelector("#cheepsub");
cheepsSub.addEventListener("click", function() {
  var cheepsSquashed = document.querySelector("#numcheeps");
  var cheepsEarned = document.querySelector("#amountcheeps");
  var cheepsSquashedValue = parseInt(cheepsSquashed.textContent);
  var cheepsEarnedValue = parseInt(cheepsEarned.textContent);
  document.querySelector("#numcheeps").innerHTML = cheepsSquashedValue - 1;
  document.querySelector("#amountcheeps").innerHTML = cheepsEarnedValue - 11;
  var totalcheeps = document.querySelector("#answer");
  var totalcheepsValue = parseInt(totalcheeps.textContent);
  document.querySelector("#answer").innerHTML = totalcheepsValue + 11;
});
