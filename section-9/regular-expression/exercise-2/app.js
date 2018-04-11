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

// ? = Optional character (grey)
re = /gre?a?y/; // Matches string with grey, gray or gry

// \ = Escape character (grey?)
re = /gre?a?y\?/; // Matches gray?, grey? or gry?

// [] = Character Sets, needs to be one of the characters in brackets (gray)
re = /gr[ae]y/i; // Matches gray or grey
re = /[GF]ray/; // Matches Gray or Fray
re = /[^GF]ray/; // Matches anything except G or F
re = /^[GF]ray/; // Matches only if starts with G or F
re = /[A-Z]ray/; // Matches any uppercase Letter
re = /[a-z]ray/; // Matches any lowercase Letter
re = /[A-Za-z]ray/; // Matches any Letter
re = /[0-9]ray/; // Matches any Digit
re = /[0-3]ray/; // Matches 0,1,2,3

// {} - Quantifies the character before
re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // Must occur exactly {2 to 4} amount of times
re = /Hel{2,}o/i; // Must occur at least {m} times

// () - Grouping
re = /^([0-9]x){3}$/; // Group to matches 3 digits with 3 digits = 3x3x3x

// Shorthand Character Classes
re = /\w/; // \w = Word Character like alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // \w = Non-Word Character anything but alphanumeric or _ like !
re = /\d/; // Match any digit
re = /\d+/; // Match any digit one or more times
re = /\D/; // Match any Non-Digit character
re = /\s/; // Match whitespace character like space or tab
re = /\S/; // Match Non-whitespace character diferent than space or tab
re = /Hell\b/i; // Word boundary, not word that has the word (Hello, welcome to Hell)

// Assertions
re = /x(?=y)/; // Match x only if followed by y (aosdxyhsoahsaodh)
re = /x(?!y)/; // Match x only if not followed by y (aosdxhsoahsaodh)

// String to match
const str = 'aosdxhsoahsaodh';


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