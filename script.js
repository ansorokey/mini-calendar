const date = document.querySelector('#date');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');

const today = new Date();
const options = { month: 'long'}
// default format:
// Thu Dec 14 2023 10:21:42 GMT-0500 (Eastern Standard Time)

// These would have only returned the 0-indexed value
// day.innerHTML = today.getDay(); // not a word
// month.innerHTML = today.getMonth(); // not a word

// Instead of making two seperate arrays for the weekday name and month,
// instead, we can use the Intl.DateTimeFormat(), and pass in 'long and an option for the value we want


curDate = today.getDate()
date.innerHTML = curDate < 10 ? '0' + curDate : curDate;
day.innerHTML = new Intl.DateTimeFormat("en-US", {weekday: 'long'}).format(today)
month.innerHTML = new Intl.DateTimeFormat("en-US", {month: 'long'}).format(today)
year.innerHTML = today.getFullYear();
