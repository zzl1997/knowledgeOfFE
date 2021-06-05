var minWindow = function(s, t) {
    let left=0
    let right=0
    let start=0
    let len=Infinity
    let m=new Map()
    for(let i=0;i<t.length;i++){
        let c=t[i]
        m.set(c,m.has(c)?m.get(c)+1:1)
    }

    let needType =m.size
    // console.log(needType)
    // 动态维持一个[left,right)区间，注意其中right是开区间
    while(right<s.length){
        // 终止条件就是 right=s.length 即 真实的右边的指针指向的是s.length-1
        let c= s[right]
        right++
        // 分析c，而后加1

        // 针对吞入的c一直在做处理
        if(m.has(c)){
            m.set(c,m.get(c)-1)
            if(m.get(c)==0){
                needType=needType-1
            }
        }
        // 什么时候这个滑动窗口可以了
        while (needType===0){
            // 保存这个满足要求的滑动窗口的快照
            if(right-left<len){
                start=left
                len=right-left
            }

            let c=s[left]
            left++
            // 对这个失去的c做一些处理
            if(m.has(c)){
                m.set(c,m.get(c)+1)
                if(m.get(c)===1){needType=needType+1}
            }

        }
    }

    return s.slice(start,start+len)

}
console.log(minWindow("ADOBECODEBANC", "ABC"));