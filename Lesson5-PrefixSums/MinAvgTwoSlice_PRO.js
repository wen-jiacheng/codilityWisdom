/*

题目：
一个由 N 个整数组成的非空数组 A，一对整数 P Q 从数组中截取一部分 (0 <= P < Q < N)。
这时 P Q 截取的部分叫做数组 A 的切片 (数组中至少有两个元素)
切片的平均值是 (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1)

现在写一个程序，找出切片平均值最小的起始位置 (P 的位置)

N 的范围 2...100000
A 中元素范围是 -10000...10000

例如：
A = [4, 2, 2, 5, 1, 5, 8];
此时程序应该返回 1

*/

function solution(A) {
	const lengthA = A.length;
	let totalA = 0;
	let mean = 0;
	let forNum = 0;

	A.forEach((item) => {
		totalA += item;
	});

	mean = totalA;

	const count = (temArr, temNum, item, i) => {
		
	}

	A.forEach((item, i) => {
		let temNum = 0;
		let temArr = [];
		forNum += item;

		if (i === 0) {
			temNum = totalA - A[lengthA - 1];
			temArr = A.slice(i, lengthA - 1);
		} else {
			temNum = totalA - forNum + item;
			temArr = A.slice(i, lengthA);
		}
	});
}