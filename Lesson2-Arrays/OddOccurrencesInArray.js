/*

题目：
有一个由 N 个整数组成的非空数组，索引从 0 开始，数组中包含奇数个元素。
除了一个元素，其他的每一个元素都可以和另一个相同的元素配对。我们要找出这个元素。

例如：
数组 A = [9, 3, 9, 3, 9, 7, 9];
那么程序就应该返回唯一一个没有和其他元素配对的值 7

*/


/*
首先考虑到一个方案，将数值作为索引，出现的次数作为值组成一个新的数组。
然后我们只需要找到【1】或者【唯一的奇数出现的位置】即可得到答案。
*/

function solution(A) {

	const newArr = [];

	if (A.length === 1) {
		return A[0];
	}

	A.forEach((item, i) => {
		newArr[item] !== undefined ? newArr[item] += 1 : newArr[item] = 1;
	});

	for (let i = 0; i < newArr.length; i++) {
		if (newArr[i] !== undefined && newArr[i] % 2 !== 0) {
			return i;
		}
	}

}

/*
对于以上方案我们得到最终得分为【正确率：100】【速度：75】
在 n = 999999 的时候速度太慢没有通过测试。

此时我们动用了两个循环。
那么有没有更快更简便的方法呢？

我们采取两种尝试
1：优化上面的方法
2：一个新的方法
*/

// 优化
function solution(A) {

	const newArr = [];

	if (A.length === 1) {
		return A[0];
	}

	A.forEach((item, i) => {
		newArr[item] !== undefined ? newArr[item] += 1 : newArr[item] = 1;

		if ( newArr[item] % 2 === 0 ) {
			newArr[item] = 0;
		}
	});

	return newArr.indexOf(1);

}

// 新方法
function solution(A) {

	let answer = A[0];

	if( A.length == 1 ) {
		return answer;
	} else {

		for (let i = 1; i < A.length; i++){
			answer ^= A[i];
		}

	}

	return answer;
}

/*
在第二种方法中使用了【异或】的方法。这技巧可以快速找到此种问题中单个出现的元素。
*/