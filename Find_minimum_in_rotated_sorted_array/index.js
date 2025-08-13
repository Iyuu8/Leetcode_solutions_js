/*
Find Minimum in Rotated Sorted Array


the link to the problem https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

time complexity: O(log(n)) 
space complexity: O(1)

explanation: 
-this solution is a little bit different from an ordinary binary search as it exploits the fact that there must exist a drop point in the rotated sorted array
-the loop continues until we find that point so there will be no infinte loops
-if we don't find the drop point in a certain interation i we check if the nums[start]>nums[mid] in this case the range [start,mid] is where the break point exists so we narrow tha range of search by end=mid-1;
-in the other case this means that area is sorted so we narrow the range by start=mid+1

*remark:
-the break condition is that

*/

var findMin = function(nums) {
    const n=nums.length;
    let start = 0;
    let end = n-1;
    while(true){
        let mid = Math.floor((start+end)/2);
        if(nums[start]<=nums[(start-1+n)%n]){
            break;
        }
        else{
            if(nums[start]>nums[mid]) end = mid-1;
            else start = mid+1;
        }
    }
    return nums[start];
};

console.log(findMin([0,1,2,4,5,6,7]));
