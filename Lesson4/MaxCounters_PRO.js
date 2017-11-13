/*

题目：
现在有 N 个初始值为 0 的计数器。
我们有两种操作可以执行：
	计数器 X 增加 1
	计数器所有的值都被设为测试所有计数器中的最大值。

现在给出由 M 个整数组成的非空数组 A。
	如果 A[K] = X 那么计数器 K 增加 1 (1 <= X <= N)
	如果 A[K] = N + 1 则将所有计数器设为此时计数器中的最大值

N 和 M 是 [ 1 ... 100,000 ] 范围内的整数
数组 A 中的每个元素在上述范围内的整数 [ 1 .. N + 1 ]。

例如：
N = 5;
A = [3, 4, 4, 6, 1, 4, 4];
那么经过连续操作我们得到的答案为：
(0, 0, 1, 0, 0)
(0, 0, 1, 1, 0)
(0, 0, 1, 2, 0)
(2, 2, 2, 2, 2)
(3, 2, 2, 2, 2)
(3, 2, 2, 3, 2)
(3, 2, 2, 4, 2)

*/

function solution(N, A) {
	let numArr = new Array(N).fill(0);

	A.forEach((item, i) => {
		if ( item === N + 1) {
			const maxNum = Math.max.apply(null, numArr);
			numArr = numArr.fill(maxNum);
		} else {
			 numArr[item - 1] += 1;
		}
	});

	return numArr;
}

/*
上述方法正确率 100 但是速度只有 40
我们尝试两个优化：
1.不要每次都计算计数器数组的最大值，改为用一个变量保存。
2.尝试不使用 fill 方法，改为 for 方法。
*/

function solution(N, A) {
	let numArr = new Array(N).fill(0);
	let maxNum = 0;
	
	A.forEach((item, i) => {
		if ( item === N + 1) {
			for (let i = 0; i < N; i++) {
				numArr[i] = maxNum;
			}
		} else {
				numArr[item - 1] += 1;
				numArr[item - 1] > maxNum && (maxNum = numArr[item - 1]);
		}
	});

	return numArr;
}

/*
以上方法 正确率 100 速度 60。可见优化有效，但是仍然不是满分。
分析一下，程序中最占用时间的操作是替换整个数组。所以是不是可以想办法去掉这个操作。
*/

function solution(N, A) {
	let answerArr = [];
	let numArr = new Array(N).fill(0);
	let maxNum = 0;
	let lastMax = 0;

	A.forEach((item) => {
		if ( item === N + 1) {
			lastMax = maxNum;
		} else {
			if (numArr[item - 1] >= lastMax) {
				numArr[item - 1] += 1;
			} else {
				numArr[item - 1] = lastMax + 1;
			}
			numArr[item - 1] > maxNum && (maxNum = numArr[item - 1]);
		}
	});

	answerArr = numArr.map((item) => {
		if (item < lastMax) {
			return lastMax;
		}
		return item;
	});

	return answerArr;
}

/*
在滴滴快车上闪现的灵感，满分。
*/
