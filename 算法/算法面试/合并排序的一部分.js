let nums1 = [1,2,3]
let nums2 = [2,5,6]


function  merge(num1,num2){
    let i=num1.length-1
    let j=num2.length-1
    let k=i+j+1

    while(i>=0 && j>=0){
        if(num2[j]>=num1[i]){
            num1[k]=num2[j]
            j--
            k--
        }else{
            num1[k--]=num1[i--]

        }
    }
    while(i>=0){
        num1[k--]=nums1[i--]
    }
    while (j>=0){
        num1[k--]=num2[j--]
    }
    return num1
}

console.log(merge(nums1, nums2));