/*
Search in Rotated Sorted Array


the link to the problem https://leetcode.com/problems/search-in-rotated-sorted-array/

time complexity: O(log(n)) 
space complexity: O(1)

explanation: 
-findMinInd is explained in the find minimum in rotated sorted array leetcode problem in this repository
-this solution searches for min the index of the minimum in the array
-when we find the index we can split the array in two parts [0,min-1] and [min,n-1] where each of them is sorted
-we perform ordinary binary search in each part and return the result


*/

var search = function(nums, target) {
    const findMinInd = (arr) =>{
        const n=arr.length;
        let start=0;
        let end=n-1;
        while(true){
            let mid=Math.floor((start+end)/2);
            if(arr[start]<=arr[(start-1+n)%n]) break;
            else{
                if(arr[start]>arr[mid]) end=mid-1;
                else start=mid+1;
            }
        }
        return start;
    };
    const searchBin = (arr,target,start,end)=>{
        let mid;
        while(start<=end){
            mid=Math.floor((start+end)/2);
            if(target===arr[mid]) return mid;
            else{
                if(target>arr[mid]) start=mid+1;
                else end=mid-1;
            }    
        }
        return -1;
    }
    const n=nums.length;
    let min = findMinInd(nums);
    const [res1,res2] = [searchBin(nums,target,0,min-1),searchBin(nums,target,min,n-1)];
    return res1!==-1? res1:res2;
};

console.log(search([4,5,6,7,0,1,2],0));