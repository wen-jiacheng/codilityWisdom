/*

数组 A 和 B 由 N 个元素组成。他们代表河里的一些鱼。
鱼的编号从 0 到 N - 1。
如果 P 和 Q 是两条鱼，切 P > Q 那么就说明 P 的最初位置在 Q 的上游。最初每条鱼的位置都不相同。

A 中的元素代表鱼的大小，且每条鱼的大小都不一样。
B 中的元素代表鱼运动的方向。B 中只含有 1 0 两种元素。0 表示向上游 1 表示向下游。

如果两条鱼朝着相反的方向运动，且他们中间没有其他的鱼，那么他们最终会相遇。
此时！大鱼会吃掉小鱼。
	如果 A[P] > A[Q]， P 吃掉 Q，P仍然向下游流动。
	如果 A[Q] > A[P]， Q 吃掉 P，Q仍然向上游流动。

我们假设所有的鱼都以同样的速度运动。也就是说相同方向的鱼永远不会相遇。
现在我们要写一个程序，计算最后有多少鱼可以活着。

例如：
	A = [4, 3, 2, 1, 5];
	B = [0, 1, 0, 0, 0];

最初除了 1 号鱼之外所有的鱼都向上游移动。
然后 1 号鱼相继吃掉了 2 3 号鱼。最后 1 号鱼被 4 号鱼吃掉。
所以程序应该返回 2。

*/

function solution(A, B) {
	const downArr = [];
	let answer = A.length;

	A.forEach((item, i) => {
		if (B[i] === 1) {
			downArr.push(item);
		} else if (downArr.length > 0) {
			if (item < downArr[downArr.length - 1]) {
				answer--;
			} else {
				while (downArr[downArr.length - 1] < item) {
					downArr.pop();
					answer--;
				}
			}
		}
	});

	return answer;
}

/*
	做了几次测试，但是---正确率和速度只有 50 总分 50

	有时候感觉 codility 还是挺坑。只说你错了，但是不说哪里错了---
	哎---
*/

function solution(A, B) {
	const downArr = [];
	let answer = A.length;

	A.forEach((item, i) => {
		if (B[i] === 1) {
			downArr.push(item);
		} else {
			for(let j = downArr.length - 1; j >= 0; j--){
				const fishSize = downArr[j];
				if(fishSize > item){
						answer--;
						break;
				}else if(fishSize < item){
						answer--;
						downArr.pop();
				}
		}
		}
	});

	return answer;
}

/*
	这样就可以了
*/