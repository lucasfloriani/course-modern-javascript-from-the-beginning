let re;
// Literal Characters
// i = case insensitive
re = /hello/; // Does not matches 'Hello World'
re = /hello/i; // Matches 'Hello World'

// Metacharacter Symbols
// ^ = Must start with
re = /^h/; // Does not match 'Hello World'
re = /^h/i; // Matches 'Hello World'

// $ = Must end with
re = /i$/; // Does not match 'Hello World'
re = /d$/; // Matches 'Hello World'
re = /World$/; // Matches 'Hello World'

// Combined $ and ^ to be the same regex in text
re = /^hello$/; // Does not match 'Hello World'
re = /^hello world$/i; // Matches 'Hello World'

// . = Matches any ONE character
re = /^h.llo world$/i; // Matches 'Hello World' but dont matches 'Heello World' because is only one character

// * = Matches any character 0 or more times
re = /h*llo world/i; // Matches 'Hello World', 'Heello World' or 'Hllo World'

// ? = Optional character
re = /gre?a?y/; // Matches string with grey, gray or gry

// \ = Escape character
re = /gre?a?y\?/; // Matches gray?, grey? or gry?

// String to match
const str = 'grey?';


// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);