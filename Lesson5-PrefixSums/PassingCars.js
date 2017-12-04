/*

题目：
一个由 N 个元素组成的数组 A。
A 中的每一个元素代表一辆汽车。A 中只有 1 0 两种元素。
	0 代表汽车向东开
	1 代表汽车向西开

假如一辆车 P 向东行驶，一辆车 Q 向西行驶，那么此时 P Q 组成一对。
我们要计算在 A 中一共有多少对汽车。

如果过往车辆的数量超过10亿，应该返回-1
0 <= P < Q < N
N 的范围是 1 .. 100000

例如：
A[0] = 0
A[1] = 1
A[2] = 0
A[3] = 1
A[4] = 1

那么一共有 5 对汽车 (0, 1), (0, 3), (0, 4), (2, 3), (2, 4) 程序返回 5

*/

/*
	对于这个问题，我们只需要找到每个 0 后面有多少个 1。然后计算总和就可以得到答案。
*/

function solution(A) {
	let numArr = [];
	let num = 0;

	A.forEach((item) => {
		if (item === 0) {
			numArr.push(0)
		} else if (numArr.length > 0) {
			numArr = numArr.map((item) => {
				return item + 1;
			})
		}
	});

	numArr.forEach((item) => {
		num += item;
	});

	return num;
}

/*
	以上答案 正确率 100 但是速度只有 20。

	思路还是正确的，只不过我们需要扩展一下。
	如果采用一个计数器，来计算每一个 0 后面有多少个 1 并将得到的值累加，也能得到结果。
	但是这样我们需要反向遍历数组。
*/

function solution(A) {
	let lengthA = A.length;
	let num = 0;
	let answer = 0;

	if (lengthA > 100000) {
		return -1;
	}

	for (lengthA; lengthA > 0; lengthA-- ) {

		if (A[lengthA - 1] !== 0) {
			num += 1;
		} else {
			answer += num;

			if (answer > 1000000000) {
				return -1;
			}

		}
	}

	return answer;
}

/*
	以上答案满分。
	注意一些判断条件！
	答案大于 10亿 返回 -1
	N 大于 100000 返回 -1
	我就是将 lengthA > 100000 写成了 lengthA >= 100000 造成了错误。
*/
