let quoteArea = document.getElementById("text");

// This function takes cares of styling page's background and text colors
function changeColor(){
    document.getElementById("change-color").style.backgroundColor = document.getElementById("text").style.color
    = document.getElementById("new-quote").style.backgroundColor = document.getElementById("tweet-quote").style.color
    =backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
}
// This function randomly picks a quote from array and displays it 
function changingQuote(){
    document.getElementById("text").innerHTML = quotesArray[Math.floor(Math.random() * quotesArray.length)];
    changeColor();
}


// Quotes
let quotesArray =[
    "' The way to get started is to quit talking and begin doing ' - Walt Disney", 
    "' Life is what happens when you're busy making other plans ' - John Lennon",
    "' The future belongs to those who believe in the beauty of their dreams ' - Eleanor Roosevelt", 
    "' Success is not final. failure is not fatal. It is the courage to continue that counts ' - Winston Churchill",
    "' Success usually comes to those who are too busy to be looking for it ' - Henry David Thoreau",
    "' Opportunities don't happen. You create them ' - Chris Grosser",
    "' Success consists of going from failure to failure without loss of enthusiasm' - Unknown",
    "' Imperfect action is better than perfect inaction ' - Unknown",
    "' Successful people do what unsuccessful people are not willing to do. Don't wish it were easier ' - Jim Rohn",
    "' Talk is cheap. Show me the code ' -  Linus Torvalds",
    "' How you look at it is pretty much how you'll see it ' -  Rasheed Ogunlaru",
    "' The elevator to success is out of order. You’ll have to use the stairs, one step at a time ' - Joe Girard",
    "' I always wanted to be somebody, but now I realise I should have been more specific ' - Lily Tomlin",
    "' Work until your bank account looks like a phone number ' - Unknown",
    "' Bad decisions make good stories. ' - Ellis Vidler"
];

// Colors
let backgroundColors = [
    "#1A1A1D",
    "#41B3A3",
    "#E27D60",
    "#E8A87C",
    "#85DCBA",
    "#C38D9E",
    "#659DBD",
    "#05386B",
    "#379683",
    "#97CAEF",
    "#5CDB95",
    "#190061",
    "#0C0032",
    "#282828",
    "#6F2232",
    "#45A29E",
    "#FFEE400",
    "#FCCD04",
    "#53900F"
];