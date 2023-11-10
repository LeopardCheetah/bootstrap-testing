var clicks = 0;

function click_count() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};