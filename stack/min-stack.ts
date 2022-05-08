/* 
  设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
  实现 MinStack 类:
  MinStack() 初始化堆栈对象。
  void push(int val) 将元素val推入堆栈。
  void pop() 删除堆栈顶部的元素。
  int top() 获取堆栈顶部的元素。
  int getMin() 获取堆栈中的最小元素。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/min-stack
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

class MinStack {
  private stack: number[]
  private mins: number[]
  private min: number

  constructor() {
    this.stack = []
    this.mins = []
    this.min = Infinity
  }

  push(val: number): void {
    this.stack.push(val)
    this.min = Math.min(this.min, val)
    this.mins.push(this.min)
    console.log(`[push] min=${this.min} mins=`, this.mins)
  }

  pop(): void {
    this.stack.pop()
    this.mins.pop()
    this.min = this.mins.length === 0 ? Infinity : this.mins[this.mins.length - 1]
    console.log(`[pop] min=${this.min} mins=`, this.mins)
  }

  top(): number {
    console.log(`[top] `, this.stack[this.stack.length - 1])
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    console.log(`[getMin] `, this.mins[this.mins.length - 1])
    return this.mins.length === 0 ? Infinity : this.mins[this.mins.length - 1]
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
/* 
["MinStack","push","push","push","top","pop","getMin","pop","getMin","pop","push","top","getMin","push","top","getMin","pop","getMin"]
[[],[2147483646],[2147483646],[2147483647],[],[],[],[],[],[],[2147483647],[],[],[-2147483648],[],[],[],[]]
 */
/* 
预期[null,null,null,null,2147483647,null,2147483646,null,2147483646,null,null,2147483647,2147483647,null,-2147483648,-2147483648,null,2147483647]
实际[null,null,null,null,2147483647,null,2147483646,null,2147483646,null,null,2147483647,2147483646,null,-2147483648,-2147483648,null,2147483646]
 */
const stack = new MinStack()
stack.push(2147483646)
stack.push(2147483646)
stack.push(2147483647) // [46, 46, 47] / [46, 46, 46]
stack.top() // output 47
stack.pop() // [46, 46] / [46, 46]
stack.getMin() // output 46
stack.pop() // [46] / [46]
stack.getMin() // output 46
stack.pop() // [] / []
stack.push(2147483647) // [47] / [47]
stack.top() // output 47
stack.getMin() // output 47
stack.push(-2147483648) // [47, -48] / [47, -48]
stack.top() // output -48
stack.getMin() // output -48
stack.pop() // [47] / [47]
stack.getMin() // output 47