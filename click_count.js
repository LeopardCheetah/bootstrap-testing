let clicks = 0;
let button = document.getElementById('click_button');
let count = document.getElementById('count');

count.innerText = 'Clicks: ${clicks}'; // think python f strings here


button.addEventListener('click', () => {
  console.log(clicks);
  clicks++;
  count.innerText = 'Clicks: ${clicks}';
})
