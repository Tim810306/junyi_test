//第一部分(A)請寫一個程式把裡面的字串反過來。

function reverseString(s) {

  let anserStr = ""; //回傳的字串
  let targetArray = s.split(""); //字串拆成陣列

  for(let i = targetArray.length-1 ; i >= 0 ; i--){
      anserStr = anserStr + targetArray[i]; //從後面串回字串
  }
  return anserStr;

};


//第一部分(B)請寫一個程式把裡面的字串,每個單字本身做反轉,但是單字的順序不變。

function reverseSentence(s) {

  let anserStr2 = ""; //回傳的字串
  let targetArray2 = s.split(""); //字串拆成陣列

  for(let j = targetArray2.length-1 ; j >= 0 ; j--){
      anserStr2 = anserStr2 + targetArray2[j];  //從後面串回字串
  }
  return  anserStr2.split(" ").reverse().join(" ");  //最後多一個步驟分割空白、反轉、再join

};