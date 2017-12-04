/*

一个由 N 个整数组成的非空数组 A，其中有三个元素 P Q R
现在写一个程序，要求找到三个元素最大的乘积。

例如：
A = [-3, 1, 2, -2, 5, 6];
那么程序应该返回 60 因为 2 * 5 * 6 是乘积最大的三个数。

*/

function solution(A) {
	const lengthA = A.length;

	A.sort((a, b) => {
		return a - b;
	});

	return A[lengthA - 1] * A[lengthA - 2] * A[lengthA - 3];
}

/*
	看！我单纯的以为排序一下，然后用数组末尾的三位相乘就是答案了---
	但是忘记了还有负负得正这一说---
	例如：
	[-5, 5, -5, 4]
	以上方法返回了 -100
	但是正确答案应该是 125
*/

function solution(A) {
	const lengthA = A.length;

	A.sort((a, b) => {
		return a - b;
	});

	const aProduct = A[0] * A[1] * A[lengthA - 1];
	const bProduct = A[lengthA - 3] * A[lengthA - 2] * A[lengthA - 1]; 

	return Math.max(aProduct, bProduct);
}

/*
	完成
*/
