var letters  = [];  //stack array

var jan = "bob";
var steve = "wafdsf";
var newWord = "";


//put letters of word into the stack
const addStack = (word) => {
for(var i = 0; i < word.length; i++){
    letters.push(word[i]);
}
console.log(word);
return word;
}


//pop off the stack in reverse order
const reverse = (word) => {
var reverseWord = "";
for(var i = 0; i < word.length; i++) {
   reverseWord += letters.pop();
}
newWord = reverseWord;
console.log(word);
return word;
}

const checkIfPalindrome = (word) => {
if(word === newWord) console.log("Word is a palindrome");
else console.log("Word is not a palindrome");

}

addStack(jan);
reverse(jan);
console.log(newWord)

checkIfPalindrome(jan);
addStack(steve);
reverse(steve);
console.log(newWord)
checkIfPalindrome(steve);




