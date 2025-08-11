/*
search a 2D matrix problem


the link to the problem https://leetcode.com/problems/trapping-rain-water/

time complexity: O(log(m*n))
space complexity: O(1)

explanation: 
-this solution searches through midN for the interval where target exists
-if it doesn't find that interval we exit because startN>endN
-if it finds the interval it does a binary search in the array with index midN

*/

var searchMatrix = function(matrix, target) {
    if(!matrix.length || !matrix[0].length) return false;
    const search = function(nums, target) {
        let start = 0;
        let end = nums.length-1;
        let mid = -1;
        while(start <= end){
            mid = Math.floor((start+end)/2);
            if(target === nums[mid]) return mid;

            if(target<nums[mid]) end = mid-1;
            else start = mid+1;
        }
        return -1;
    };
    const n = matrix.length;
    const m = matrix[0].length;
    let startN = 0;
    let endN = matrix.length-1;
    while(startN <= endN){
        midN = Math.floor((startN+endN)/2);
        if(target<=matrix[midN][m-1] && target>=matrix[midN][0]){
            return search(matrix[midN],target)!==-1;
        }
        else{
            if(target>matrix[midN][m-1]) startN = midN+1;
            else endN = midN-1; 
        }
    }
    return false;
};

console.log([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3)