function reverseString(str) {
  // type your code here
  reversedString = ""

    for (let i = str.length - 1; i > -1; --i) {
      reversedString + str[i]
    }
    
  return reversedString
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
// the goal is have a given string backwards
// if i can grab each character starting from the end
//  each time adding it to an initially empty string then i can 
// achieve the reveresed string
