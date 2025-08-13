/*
Time Based Key Value Store 


the link to the problem https://leetcode.com/problems/time-based-key-value-store/

time complexity: 
-set operation: O(1) 
-get operation O(log(n))
-space complexity: O(m*n)

where m is the number of keys and n the number of entries per key

explanation: 
*constructor:
-we use a hashMap to manage keys

*set operation:
-if the key doesn't exist we add it to the hashmap, each key will correspond to an array of entries [{val,time}...] where each entry represents a value and a timestamp
-if the key exists we push the entry to the array of entries directly exploiting the problems constraints

*get opeartion:
-we check if the key exists, if it doesn't we return ""
-if it does we get the array corresponding to to key
-we search in that array for the greatest entry that has a timestamp less or equal to the provided timestamp and return it
- if it doesn't exist i.e. obj.ind is out of the array's borders we return ""
*/

const searchBin = (arr,val)=>{
    let start=0;
    let end=arr.length-1;
    while(start<=end){
        let mid=Math.floor((start+end)/2);
        if(val===arr[mid].time) return {ind:mid,stat:true};
        else{
            if(val>arr[mid].time) start=mid+1;
            else end=mid-1;
        }
    }
    return {ind:start-1,stat:false};
}
var TimeMap = function() {
    this.map = new Map();
};
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.map.has(key)) this.map.set(key,[{val:value,time:timestamp}]);
    else{
        const valArr = this.map.get(key);
        valArr.push({val:value,time:timestamp});
        this.map.set(key,valArr);
    }
};

TimeMap.prototype.get = function(key, timestamp) {
    if (!this.map.has(key)) return "";
    const valArr=this.map.get(key);
    let obj = searchBin(valArr,timestamp);
    console.log(obj);
    return (obj.ind<valArr.length && obj.ind>=0)? valArr[obj.ind].val:"";

};
const obj = new TimeMap();
obj.set("love", "high", 10);
obj.set("love", "low", 20);
console.log(obj.get("love", 5));
console.log(obj.get("love", 10));
console.log(obj.get("love", 15));
console.log(obj.get("love", 20));
console.log(obj.get("love", 25));
