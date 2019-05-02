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
        if (item == '('){
            stack.push(item);
        }else if(item == ')'){
            if(stack.isEmpty()){
                return false;
            }else{
                stack.pop();
            }
        }
    }
    return stack.isEmpty();
};
console.log(is_legal_brackets(")(ahfjadf()"));
console.log(is_legal_brackets("()()ahfjadf()"));
