// 导入js文件
Stack = require('./stack_test.js')
// 获取栈中最小值
function MinStack(){
    // 实例化,存储普通数据
    var data_stack = new Stack.Stack();
    // 实例化,存储最小数据
    var min_stack = new Stack.Stack();
    this.push = function(item){
        // 数据压入data_stack栈
        data_stack.push(item);
        /* 若min_stack为空或压入数小于min_stack栈顶元素
            将该元素压入min_stack,保证栈顶为最小元素
        */
        if(min_stack.isEmpty() || item < min_stack.top()){
            min_stack.push(item);
        }else{// 否则栈顶元素压入min_stack
            min_stack.push(min_stack.top());
        }
    }
    // 弹出元素
    this.pop = function(){
        data_stack.pop();
        min_stack.pop();
    }
    // 获取最小值
    this.min = function(){
        return min_stack.top();
    }
};

min_stack = new MinStack();
min_stack.push(4);
min_stack.push(5);
min_stack.push(9);
console.log(min_stack.min());
min_stack.push(0);
console.log(min_stack.min());