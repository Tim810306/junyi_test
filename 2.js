//第二部分 請寫一個程式,Input 是一個數字,Output 是從 1 到這個數字,扣除掉所有 3 的倍數以及 5 的倍數,但是需要保留同時是 3 和 5 的倍數的總數字數。

function count(int) {
    
    let count3=int/3;  					
    let count5=int/5;
    let count15=int/greatest_common_divisor(3.5);
  
    let result=int-count3-count5+2*count15; //輸入數字減掉3跟5的倍數，再加回公倍數
    
    return result;

};

function greatest_common_divisor(a,b){
	let minNum = Math.min(a,b)
	let maxNum = Math.max(a,b)
	let i = Math.floor(maxNum / minNum)
	let std = 0;

	if(a ===0 || b===0){
		return maxNum;
	}

	for(;i<=maxNum;i++){
		std = minNum * i;
		if(std % maxNum === 0){
			return std;
			break;
		}
	}
}