/*
for the time being fuck this problem
*/

var findMedianSortedArrays = function(nums1, nums2) {
    [nums1,nums2] = nums1.length>nums2.length || (nums1.length===nums2.length && nums1[0]>nums2[0])? [nums2,nums1]:[nums1,nums2];
    const [n,m] = nums1.length>nums2.length || (nums1.length===nums2.length && nums1[0]>nums2[0])? [nums2.length,nums1.length]:[nums1.length,nums2.length];
    const half = Math.floor((n+m)/2);
    const res=Math.floor((n+m-1)/2)
    if(n===0) return m%2!==0? nums2[res]:(nums2[res]+nums2[res+1])/2;
    let start=0;
    let end=n-1;
    let [part1,part2]=[0,0];
    while(true){
        part1 = Math.floor((start+end)/2);
        part2 = half-part1-2;
        if(nums1[part1]>nums2[part2+1]) end=part1-1;
        else if(part2>=0 && part1<n-1 && nums2[part2]>nums1[part1+1]) start=part1+1;
        else break;
    }
    const val11=!isNaN(Number(nums1[part1+1]))?nums1[part1+1]:nums2[part2+1];
    const val21=!isNaN(Number(nums2[part2]))? nums2[part2]:nums1[part1];
    const val12=!isNaN(Number(nums1[part1]))? nums1[part1]:val21;
    const val22=!isNaN(Number(nums2[part2+1]))? nums2[part2+1]:val11;

    return (n+m)%2!==0? Math.min(val11,val22):(Math.max(val12,val21)+Math.min(val11,val22))/2;
}
console.log(findMedianSortedArrays([1,2],[3,4]));