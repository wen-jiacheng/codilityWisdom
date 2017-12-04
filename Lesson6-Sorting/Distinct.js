/*

问题：
编写一个函数
function solution(A)
给出一个以0为起始索引的数组 A，其中包含 N 个整数， 返回 A 中不重复的整数的个数:

*/

/*
	这道题其实就是数组去重
*/

function solution(A) {
	const newArr = new Set(A);

	return newArr.size;
}

/*
	这样就搞定了，但是感觉有点投机取巧。
	所以再写一种普通的。
*/

function solution(A) {
	return Array.from(new Set(A)).length;
}

function solution(A) {
	const singleObj = {};
	const newArr = [];

	A.forEach((item) => {
		if (!(item in singleObj)) {
			newArr.push(item);
			singleObj[item] = 0;
		}
	});

	return newArr.length;
}