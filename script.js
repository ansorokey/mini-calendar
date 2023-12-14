const date = document.querySelector('#date');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');

// const today = new Date();
const options = { month: 'long'}
// const today = new Intl.DateTimeFormat("en-US", options).format(new Date())
console.log(today);
// default format as
// Thu Dec 14 2023 10:21:42 GMT-0500 (Eastern Standard Time)

date.innerHTML = today.getDate();
day.innerHTML = today.getDay(); // defaults to an index, not a word
month.innerHTML = today.getMonth(); // defaults to an index, not a word
year.innerHTML = today.getFullYear();

// @ TODO
// get month name using toLocaleString
