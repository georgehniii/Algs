function twoSum(arr, sum) {
    // create the object
     const obj = {}

     for(let i = 0; i < arr.length; i++) {
         let current = arr[i]
         let neededNumber = sum - current
        if(obj[neededNumber] != null) {
            return [neededNumber, current]
        } else {
            obj[current] = i
        }
     }
     return false
}


const arr = [1,2,3,4,16]
const sum = 17

// [1, 16]
console.log(twoSum(arr, sum))

//in C#=========================================================
//this returns the values not the index.
// public class Solution 
// {
//     public int[] TwoSum(int[] nums, int target) 
//     {
//         List<NumObj> myObj = new List<NumObj>();
//         NumObj useThis = new NumObj();
//         int[] retArr;
//         foreach(var index in nums){
//             var current = index;
//             var neededNumber = target - current;
//             if(useThis.needed != null){
//                 // retArr[0] = neededNumber;
//                 // retArr[1] = current;
//                 retArr = new int[] {neededNumber,current};
//                 return retArr;
//             }else {
//                 useThis.cur = index;
//             }
//         }
//         return new int[] {0,0};
//      }
// }

// public class NumObj
// {
//     public int cur { get; set; }
//     public int needed {get; set; }
// }

//C# try for expando object==================================================
// public class Solution 
// {
//     public int[] TwoSum(int[] nums, int target) 
//     {
//        dynamic NumObj = new ExpandoObject();
//         int[] retArr;
        
//         for(var index = 0; index < nums.length; index++){
//             var current = nums[index];
//             var neededNumber = target - current;
//             if(NumObj.neededNumber != null){
//                 // retArr[0] = neededNumber;
//                 // retArr[1] = current;
//                 retArr = new int[] {NumObj.neededNumber,NumObj.current};
//                 return retArr;
//             }else {
//                 NumObj.current = index;
//             }
//         }
//         return new int[] {0,0};
//      }
// }

// public class NumObj
// {
//     public int val {get; set; }
// }