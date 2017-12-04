/*

题目：
一个由 N 个字符组成的字符串 S。
当 S 满足一下任意条件的时候则认为 S 被正确嵌套。
	S 是空的。
	S 满足  "(U)" "[U]" "{U}" 其中 U 是正确嵌套的字符串。
	S的形式是“VW”，其中 V 和 W 是正确嵌套的字符串。

现在我们要写一个程序，如果 S 正确嵌套就返回 1 否则返回 0

N 的取值范围是 0...200000
S 仅包含 "(", "{", "[", "]", "}", ")"

例如：
	S = "{[()()]}" 那么程序应该返回 1
	S = "([)()]"   那么程序应该返回 0

*/

function solution(S) {
	const obj = {
		"{" : "}",
		"(" : ")",
		"[" : "]",
		")" : "(",
		"]" : "[",
		"}" : "{"
	};
	let sLeft = "";
	let sRight = "";

	if (S.length % 2 !== 0 || S.length === 1) {
		return 0;
	}

	sLeft = S.slice(0, S.length / 2).split("").reverse();
	sRight = S.slice(S.length / 2, S.length);

	sLeft = sLeft.map((item) => {
		return obj[item];
	});

	if (newLeft.join("") === sRight) {
		return 1;
	}
	
	return 0;
}

/*
	以上思路，想着吧 S 从中间断开，反向后再转换，如果前后两个字符串相等，那么就是正确嵌套。
	结果 正确率只有 33 速度只有 40 总分 37。
	看来是没有完全找到规律导致思路出问题了---
*/

function solution(S) {
	const obj = {
		"{" : "}",
		"(" : ")",
		"[" : "]",
		")" : "(",
		"]" : "[",
		"}" : "{"
	};
	const arr = [];

	for (let i = 0; i < S.length; i++) {
		if (arr[arr.length - 1] !== obj[S[i]]) {
			arr.push(S[i])
		} else {
			arr.pop();
		}

		if (arr.includes(")") || arr.includes("}") || arr.includes("]")) {
			return 0;
		}
	}

	if (arr.length === 0) {
		return 1;
	} else {
		return 0;
	}
}

/*
	这次我们利用了 栈 方法来处理，正确率达到了 100 但是速度只有 60
	很明显问题出在了多次的 includes 上
*/

function solution(S) {
	const obj = {
		"{" : "}",
		"(" : ")",
		"[" : "]",
		")" : "(",
		"]" : "[",
		"}" : "{"
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
