function setBgColor() {
  const colors = [
    "#f0cede",
    "#f3e0d3",
    "#ebf3d1",
    "#cff1e7",
    "#d5d1f1",
    "#ffbba7",
    "#ffc598",
    "#ffd188",
    "#d1e789",
    "#cae293",
  ];

  const randomColor = Math.floor(Math.random() * colors.length);
  const color = colors[randomColor];

  document.body.style.backgroundColor = color;
}

function getMidnightDate() {
  const midnight = new Date();
  const now = new Date();

  midnight.setTime(now.setUTCHours(0));
  midnight.setTime(now.setMinutes(0));
  midnight.setTime(now.setSeconds(0));
  midnight.setTime(now.setMilliseconds(0));

  return midnight.getTime();
}

function showQuote() {
  fetch("./quotes.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (quotes) {
      const midnightDate = getMidnightDate();
      const random = midnightDate % quotes.length;
      const quote = quotes[random];

      document.getElementById('quote').innerHTML = quote.text;
      document.getElementById('author').innerHTML = quote.author;
    });
}

setBgColor();
showQuote();
