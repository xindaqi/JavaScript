// Create Stack class
function Stack(){
    /*私有变量,外部不能访问,this暴露方法*/
    var items = []; // 新建数组存储数据
    // push方法:从栈顶添加元素,也叫压栈
    this.push = function(item){
        items.push(item)
    };
    // 弹出栈顶元素方法
    this.pop = function(){
        return items.pop()
    };
    // 返回栈顶元素
    this.top = function(){
        return items[items.length-1];
    };
    // 判断栈是否为空
    this.isEmpty = function(){
        return items.length == 0;
    };
    // 返回栈的方法
    this.size = function(){
        return items.length;
    };
    //清空栈
    this.clear = function(){
        items = [];
    };

};

// 判断字符串中括号是否合法
function is_legal_brackets(string){
    var stack = new Stack();
    for(var i=0; i<string.length; i++){
        var item = string[i];
        // 遇到左括号压入栈中
        if (item == '('){
            stack.push(item);
        }else if(item == ')'){// 若为右括号判断栈是否为空
            if(stack.isEmpty()){
                return false;
            }else{// 若栈不为空,将左括号提取出来,左右括号抵消
                stack.pop();
            }
        }
    }
    return stack.isEmpty();
};
// 计算指定顺序的后缀表达式
function calc_exp(exp){
    var stack = new Stack();
    for(var i=0; i<exp.length; i++){
        var item = exp[i];
        var symbol = ["+", "-", "*", "/"];
        
        if(symbol.indexOf(item)>=0){
            // 遇到运算符连续取出两个数据
            var value_1 = stack.pop();
            var value_2 = stack.pop();
            // 数据与运算符连接"4+5"
            var exp_str = value_2 + item + value_1;
            // eval提取字符串内容,使用parseInt解析完成计算
            var res = parseInt(eval(exp_str));
            // 计算结果压入栈中,待下次计算使用
            stack.push(res.toString());
        }else{
            // 不是运算符直接压入栈中
            stack.push(item);
        }  
    }
    // 返回计算结果
    return stack.pop();
};
console.log(is_legal_brackets(")(ahfjadf()"));
console.log(is_legal_brackets("()()ahfjadf()"));
console.log(calc_exp(["4", "13", "5", "/", "+"]));
exports.Stack = Stack; 
