function palindrome(str) {
  str = str.toLowerCase();
  str = str.match(/[^_\W]/gi);

  let backwardsStr = [];
  for(let j = str.length - 1 ; j >= 0; j--){
    backwardsStr.push(str[j])
  }
  backwardsStr = backwardsStr.join("");
  str = str.join("");

  if(backwardsStr === str){
    return true
  } else {
    return false
  }
}

palindrome("A man, a plan, a canal. Panama") // true
palindrome("My age is 0, 0 si ega ym.") // true
