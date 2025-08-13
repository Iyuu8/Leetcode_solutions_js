/*
Koko Eating Bananas


the link to the problem https://leetcode.com/problems/koko-eating-bananas/

time complexity: O(n*log(m)) where m=max(piles)
space complexity: O(1)

explanation: 
-in the worst case scenario where h=piles.length koko must finish a pile of banana each hour therefore k=m
-a brute force solution will be checking all the values between 1..m
-however since the range 1..m is sorted we can use binary search to get the needed value
-if we find a rate of eating through which koko can finish all the piles we consider it as a possible output i.e. res=mid, in this case we continue searching in lesser values because it is possible to find a lower rate
-in the other case we search in the greater values for a faster rate

*/

var minEatingSpeed = function(piles, h) {
    let start = 1;
    let end = Math.max(...piles);
    const simulate = (arr,h,k)=>{
        let hours=0;
        for(let val of arr){
            hours+= Math.ceil(val/k)
        }
        return (hours<=h);
    }    
    let mid;
    let res=end;
    while(start<=end){
        mid = Math.floor((end+start)/2);
        const canFinish = simulate(piles,h,mid);
        if(canFinish) {
            end = mid-1;
            res = mid;
        }
        else start = mid+1;
    }
    return res;
};
console.log(minEatingSpeed([3,6,7,11],8));