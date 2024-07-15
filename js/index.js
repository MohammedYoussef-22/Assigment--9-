var quotes = [
  {
    quote: '"Do not take life too seriously. You will not get out alive."',
    author: "--Elbert Hubbard",
  },
  {
    quote: `"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."`,
    author: "--Marilyn Monroe",
  },
  {
    quote: `"So many books, so little time."`,
    author: `--Frank Zappa`,
  },
  {
    quote: `"Be the change that you wish to see in the world."`,
    author: `--Mahatma Gandhi`,
  },
];

function generateQuote() {
  var x = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[x].quote;
  document.getElementById("author").innerHTML = quotes[x].author;
}
