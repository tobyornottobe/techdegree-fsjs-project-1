// array of objects containing quotes

var quotes = [
    {
       quote: 'So many books, so little time.',
       source: 'Frank Zappa',
       citation: 'website',
       year: '1994',
       categorization: 'knowledge'
    },
    {
      quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
      source: 'Patrick McKenzie',
      citation: 'Twitter',
      year: '2016',
      categorization: 'coding'

    },
    {
      quote: "If you tell the truth, you don't have to remember anything.",
      source: 'Mark Twain',
      citation: 'website',
      categorization: 'life'
    },
    {
      quote: 'Faith ― acceptance of which we imagine to be true, that which we cannot prove.',
      source: 'Dan Brown',
      citation: 'The Da Vinci Code',
      year: '2006',
      categorization: 'book'
    },
    {
      quote: 'You only live once, but if you do it right, once is enough.',
      source: 'Mae West',
      categorization: 'life'
    },
    {
      quote: 'Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.',
      source: 'Zig Ziglar',
      categorization: 'time management'
    },
];




//function to pick a random quote


function getRandomQuote() {
  //get quote from array

  var num = Math.floor(Math.random() * quotes.length);

  return(quotes[num])
  console.log(quotes[num])

}


//function to concatenate the quote and print it

var quotebox = document.getElementById("quote-box");

function printQuote(randomQuote) {


  var randomQuote = getRandomQuote();
  //the html code
  var qtsrc = '<p class="quote">' + randomQuote.quote + '</p> \
              <p class="source">' + randomQuote.source + ' ';

  var citation = '<span class="citation">' + randomQuote.citation + '</span>';
  var year = '<span class="year">' + randomQuote.year + '</span>';
  var categorization = '<span class="year">' + randomQuote.categorization + '</span></p>';

  //a check if citation and year are available
  var q = qtsrc;

  if (randomQuote.citation && randomQuote.year) {
    q += citation;
    q += year;
    } else if (randomQuote.citation) {
    q += citation;
    } else if (randomQuote.year) {
    q += year;
    };

    //code to print the quote
    quotebox.innerHTML = q + categorization;


    //change background color, source: https://www.sitepoint.com/generating-random-color-values/
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    document.body.style.backgroundColor = hue;

}

//time trigger, source: https://stackoverflow.com/questions/11901074/javascript-call-a-function-after-specific-time-period
setInterval(function(){printQuote(false)},3000);


//this code listens to the button click
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
