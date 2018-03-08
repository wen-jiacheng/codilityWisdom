/*

对于一个给定的整数数组, "支配者"是在这个数组中出现的频率超过一半的整数.

例如:

	A[0] = 3    A[1] = 4    A[2] =  3
	A[3] = 2    A[4] = 3    A[5] = -1
	A[6] = 3    A[7] = 3
数值 3 出现过 5 次, 5/8 > 0.5, 所以数值"3"是一个"支配者";

而在这个数组中, 这个"支配者"出现在数组下标 0, 2, 4, 6, 7
请写一个函数对给定数组返回其任意一个支配者的数组下标。

例如，对上述数组，函数可以返回 0，2，4，6，7 中的任意一个。 如果没有支配者，函数应该返回 −1。

*/

/*
	看起来，我们需要找一个出现次数最多，且次数过半的元素。
*/

function solution(A) {
	const lengthA = A.length;
	const obj = {};

	let num = 0;
	let answer = -1;

	A.forEach((item, i) => {
		if (obj[item] === undefined) {
			obj[item] = 1;
		} else {
			obj[item] += 1;
		}
	});

	Object.keys(obj).forEach((item) => {
		if (obj[item] / lengthA > 0.5 && obj[item] > num) {
			num = obj[item];
			answer = item;
		}
	});

	return A.indexOf(Number(answer));

}

/*
	答案是没问题了，但是看起来有点杂乱。抽空优化一下。
*/