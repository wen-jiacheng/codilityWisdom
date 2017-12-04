/*

问题：
数组 A 是由 N 个整数组成的非空数组。
任意整数 P (0 < P < N) 将 A 数组分成两部分：
A[0], A[1], ..., A[P − 1] 和 A[P], A[P + 1], ..., A[N − 1]
写一个程序求【两部分之和相减，绝对值最小是多少】

例如：
A = [3, 1, 2, 4, 3];

P = 1, num = |3 − 10| = 7;
P = 2, num = |4 − 9| = 5;
P = 3, num = |6 − 7| = 1;
P = 4, num = |10 − 3| = 7;

程序应该返回 1

*/

function solution(A) {
	const length = A.length;
	let total = 0;
	let answerArr = [];
	let num = 0;

	if ( A.length <= 1 ) {
		return 0;
	}

	A.forEach((item) => {
		total += item;
	})

	A.forEach((item, i) => {
		num += item;
		const minus = Math.abs(total - 2 * num);
		i < length - 1 && answerArr.push(minus);
	})

	return Math.min.apply(Math, answerArr);
}

/*
此题需要注意 P 的取值范围是小于 N 的。我就是忽略了这点，所以做了三次。
*/
