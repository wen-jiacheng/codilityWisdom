/*

问题：
字符串 S 由 ( 和 ) 组成。
现在我们要写一个函数来判断 S 是否由正确的括号表达式组成
是就返回 1 否则返回 0

例如：
	(()(())()) 此函数应返回 1
	()) 此函数应返回 0.

*/

/*
	这道题---
	看起来和上一道题一模一样啊。
	试试照搬前面的 栈 方法
*/

function solution(S) {
	const obj = {
		"(" : ")",
		")" : "("
	};
	const arr = [];

	for (let i = 0; i < S.length; i++) {
		const pushNum = S[i];
		
		if (arr[arr.length - 1] !== obj[pushNum]) {
			if (pushNum.includes(")") || pushNum.includes("}") || pushNum.includes("]")) {
				return 0;
			}
			arr.push(pushNum)
		} else {
			arr.pop();
		}
	}

	if (arr.length === 0) {
		return 1;
	} else {
		return 0;
	}
}

/*
	果然通过了---
	再想想如果有新方法的再写出来---
*/