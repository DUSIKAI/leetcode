/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b)=>{
        return a-b;
    });
    var result=[];
    var len=nums.length;
    for(var i=0;i<len;i++){
        if(i!==0&&nums[i]===nums[i-1]) continue;
        for(var j=i+1;j<len;j++){
        if(j!==i+1&&nums[j]===nums[j-1]) continue;    
        var l=j+1;
        var r=len-1;
        while(l<r){
            var tag=nums[i]+nums[j]+nums[l]+nums[r];
            if(tag===target){
                result.push([nums[i],nums[j],nums[l],nums[r]]);
                while(l<r&&nums[l]===nums[l+1]) l++;
                while(l<r&&nums[r]===nums[r-1]) r--;
                l++;
                r--;
            }else if(tag<target){
                l++;
            }else{
                r--;
            }
        }
        }
    }
    return result;
};