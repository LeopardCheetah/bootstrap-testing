var clicks = 0;
var button = document.getElementbyID("click_button");



function click_count() {
  clicks += 1;
  document.getElementById("clicks").innerText = clicks;
};