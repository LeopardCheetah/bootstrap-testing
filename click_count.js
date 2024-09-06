let clicks = 0;
let button = document.getElementById('click_button');
let count = document.getElementById('count');


// think python f strings here
// need backticks here
count.innerText = `Clicks: ${clicks}`; 


button.addEventListener('click', () => {
  console.log(clicks);
  clicks++;
  count.innerText = `Clicks: ${clicks}`;
})
