var str = "namangharchal"; //7
var n = str.length;
// racecar, oo, cec, aceca, t h i s
// t th thi this thisr ......
// h hi his .......

// 0-n-1
// 1-n-1
// 2-n-1     // abc
            //  a ab abc, b bc, c
var max = -Infinity;
            
for(var i=0;i<n;i++){ //2
    var bag=""; // ""
    for(var j=i;j<n;j++){ // 2
        bag+=str[j]; // c
        var len = pallindrome(bag); //7,1
        if(len>max){ //7>1
            max=len; //
        }
    }
}
console.log(max);

function pallindrome(bag){
    var left=0;
    var right =bag.length - 1;
    while(left<bag.length&&right>=0){
        if(bag[left]==bag[right]){ //
            left++;
            right--;
        }else{
            return 1;
        }
    }
    return bag.length;
}