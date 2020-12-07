let counter = 20;
let votingHasEnded = false;

// start timer
let intervalVote = setInterval(function () {
  document.querySelector(".imposters__voting span").innerHTML = counter;
  counter--;

  // on 10 seconds-> make text red
  if (counter < 10) {
    document.querySelector(".imposters__voting").style.color = "red";
  }

  // on 0 seconds -> voting has ended
  if (counter < 0) {
    votingHasEnded = true;
    clearInterval(intervalVote);
    document.querySelector(".imposters__voting").innerHTML = "Voting has ended";
  }

  console.log(counter);
}, 1000);

// click on imposter -> mark as voted
// EVENT BUBBLING
document.querySelector(".imposters").addEventListener("click", function (e) {
  if (votingHasEnded) {
    return false;
  }

  // remove .voted from all .imposter
  let imposters = document.querySelectorAll(".imposter");
  for (let i = 0; i < imposters.length; i++) {
    imposters[i].classList.remove("voted");
  }

  e.target.classList.add("voted");
});
