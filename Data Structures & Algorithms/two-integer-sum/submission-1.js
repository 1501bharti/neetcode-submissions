class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const newMap = new Map();

        for(let i = 0 ;i<nums.length ; i++){
          const extra = target - nums[i];

          if(newMap.has(extra)){
            return [newMap.get(extra) , i]
          }

          newMap.set(nums[i] , i);
        }
    }
}
