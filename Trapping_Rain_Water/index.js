/*
Trapping Rain Water problem


the link to the problem https://leetcode.com/problems/trapping-rain-water/

time complexity: O(n)
space complexity: O(1)

explanation: 
-this solution searches for the next highest wall whose index is indMax through the index j
-if that wall doesn't exist (i.e indMax === 0) this means that there is no water to trap, in this case we exit the the outer loop
-in the other case where there is a next highest wall we calculate the amount of water and add it to amount then the i index advances to indMax

each element is visited at most twice:
-once during the wall search
-once to calculate the trapped water
*/

var trap = function(height) {
    const calcWater = (arr,start,end)=>{
        if(end>arr.length-1) return 0;
        let amount = 0;
        const container = Math.min(arr[start],arr[end]);
        for(let i=start+1;i<end;i++){
            amount= arr[i]<=container? amount+container-arr[i] : amount;
        }
        return amount;
    }
    let amount = 0;
    let i=0;
    let j=0;
    let stop=false;
    while(!stop){
        while(height[i]===0) i++;
        j=i;
        let prev=j;
        let firstUp=false;
        let indMax=0;
        do{
            prev=j;
            j++;
            if(j<height.length && height[j]>height[prev]){
                indMax = firstUp? indMax : j;
                firstUp = true;
                indMax = height[j]>=height[indMax]? j:indMax;
            } 
        }while(height[j]<=height[i] && j<height.length)
        amount = indMax>i? amount+calcWater(height,i,indMax) : amount;
        i=indMax>i? indMax:height.length;
        stop= i>=height.length-1;
    }
    return amount;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));