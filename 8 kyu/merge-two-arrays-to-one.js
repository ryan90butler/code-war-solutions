// You are given two sorted arrays that contain only integers. Your task is to find a way to merge them into a single one, sorted in ascending order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

function mergeArrays(arr1, arr2) {
 return Array.from(new Set(arr1.concat(arr2))).sort((a,b)=>(a-b))
}

console.log(mergeArrays([1,2,3],[3,4,5,6,1,8]))