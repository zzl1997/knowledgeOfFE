function quick_sort(arr, left, right) {
    var i = left; //哨兵i
    var j = right; //哨兵j
    var pivot = arr[left]; //标准值
    if (left >= right) { //如果数组只有一个元素
        return;
    }
    while (i < j) {
        while (arr[j] > pivot && i < j) { //从右边向左找第一个比pivot小的数，找到或者两个哨兵相碰，跳出循环
            j--;
        }
        while (arr[i] <= pivot && i < j) { //从左边向右找第一个比pivot大的数，找到或者两个哨兵相碰，跳出循环,这里的=号保证在本轮循环结束前，pivot的位置不变，否则的话跳出循环，交换i和from的位置的时候，from位置的上元素有可能不是pivot
            i++;
        }

        /**
         代码执行道这里，1、两个哨兵到找到了目标值。2、j哨兵找到了目标值。3、两个哨兵都没找到(pivot是当前数组最小值)
         **/
        if (i < j) { //交换两个元素的位置
            [arr[i], arr[j]] = [arr[j], arr[i]]

        }
    }
    arr[left] = arr[i] //
    arr[i] = pivot;
    quick_sort(arr, left, i - 1);
    quick_sort(arr, i + 1, right);
    return arr
}

let arr = [5, 6, 23, 67, 7, 8, 3, 4, 53, 54]
console.log(quick_sort(arr, 0, arr.length - 1));
