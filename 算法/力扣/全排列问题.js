let permute = function (nums) {
    let res = []

    traverse([])

    function traverse(path) {
        if (path.length === nums.length) {
            res.push(path.slice())
            return
        }
        for (let num of nums) {
            if (path.includes(num)) {
                continue
            }
            path.push(num)

            traverse(path)
            path.pop()


        }
    }

    return res

};
console.log(permute([1, 2, 3]));