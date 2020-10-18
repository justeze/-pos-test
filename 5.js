const palindrome = (string) => {
  let reverseString = string.toLocaleLowerCase().split("").reverse().join("");
  if (reverseString === string.toLocaleLowerCase()) {
    console.log('String merupakan Palindrome')
  } else {
    console.log('String bukan Palindrome')
  }

};

palindrome("kambing");
