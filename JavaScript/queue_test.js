function Queue(){
    var items = [];
    this.enqueue = function(item){
        items.push(item);
    };
    this.dequeue = function(){
        return items.shift();
    };
    this.head = function(){
        return items[0];
    };
    this.tail = function(){
        return items[items.length-1];
    };
    this.size = function(){
        return items.length;
    };
    this.clear = function(){
        return items = [];
    };
    this.isEmpty = function(){
        return items.length == 0;
    };
};

function del_ring(arr_list){
    // 队列实例
    var queue = new Queue();
    // 队列存储数据
    for(var i=0;i<arr_list.length;i++){
        queue.enqueue(i);
    }
    // 出队数据个数
    var index = 0;
    while(queue.size()!=1){// 若队列数据大于1,数据出队
        var item = queue.dequeue();
        index += 1;
        if(index % 3 != 0){// 出队的数据不是需要删除的,重新入队
            queue.enqueue(item);
        }
    }
    // 返回剩下的数
    return queue.head();
};
console.log(del_ring([0, 1]));
console.log(del_ring([0, 1, 2, 3, 4, 5]));

function fibonacci(n){
    queue = new Queue();
    var index = 0;
    queue.enqueue(1);
    queue.enqueue(1);
    while(index<n-2){
        var del_item = queue.dequeue();
        var head_item = queue.head();
        var next_item = del_item + head_item;
        queue.enqueue(next_item);
        index += 1;
    }
    queue.dequeue();
    return queue.head();
};
console.log(fibonacci(5));
console.log(fibonacci(8));

function QueueStack(){
    var queue_1 = new Queue();
    var queue_2 = new Queue();
    var data_queue = null;
    var empty_queue = null;
    // 确认哪个队列存放数据,哪个队列备份空队列
    var init_queue = function(){
        if(queue_1.isEmpty() && queue_2.isEmpty()){
            data_queue = queue_1;
            empty_queue = queue_2;
        }else if(queue_1.isEmpty()){
            data_queue = queue_2;
            empty_queue = queue_1;
        }else{
            data_queue = queue_1;
            empty_queue = queue_2;
        }
    };
    this.push = function(item){
        init_queue();
        data_queue.enqueue(item);
    };
    this.top = function(){
        init_queue();
        return data_queue.tail();
    };
    this.pop = function(){
        init_queue();
        while(data_queue.size()>1){
            empty_queue.enqueue(data_queue.dequeue());
        }
        return data_queue.dequeue();
    };
};
var q_stack = new QueueStack();
q_stack.push(1);
q_stack.push(2);
q_stack.push(3);
console.log(q_stack.top());// 栈顶元素3
console.log(q_stack.pop());// 移除栈顶元素3
console.log(q_stack.top());// 栈顶元素2
function print_yanghui(n){
    var queue_tri = new Queue();
    queue_tri.enqueue(1);//创建队列
    for(var i=1; i<=n; i++){// 行控:控制打印几层
        var line = "";
        var pre = 0;// 用于计算i行的数据
        for(var j=0; j<i; j++){// 行控:控制第i行数据
            var item = queue_tri.dequeue();// 弹出i-1行数据
            line +=item + " "
            var value = item + pre;// 计算i行数据
            pre = item;
            queue_tri.enqueue(value);// 第i行数据入队
        }
        queue_tri.enqueue(1);
        // return line;
        console.log(line);
    }
};
console.log("---yanghui----");
// console.log(print_yanghui(5));
print_yanghui(7);
function print_yanghui_other(n){
    var queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(0);
    for(var i=1; i<=n; i++){
        var line = "";
        var pre = 0;
        while(true){
            var item = queue.dequeue();
            if(item==0){//若出队元素为0,即为队列结尾,使1入队,并加入标志位0
                queue.enqueue(1);
                queue.enqueue(0);
                break
            }else{
                line += item + " "
                var value = item + pre;
                pre = item;
                queue.enqueue(value);  
            }
        }
        console.log(line);
    }
};
console.log("---yanghuiother----");
print_yanghui_other(7);
var maze_array = [
                [0, 0, 1, 0, 0, 0, 0],
                [0, 0, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [1, 0, 0, 0, 1, 0, 0],
                [1, 1, 1, 0, 0, 0, 0],
                [1, 1, 1, 0, 0, 0, 0]];
// function maze_path(){};
function maze_map(){
    var maze_array = [
        [0, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [1, 0, 0, 0, 1, 0, 0],
        [1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0]];
    
    for(var i=0; i<=6; i++){
        var line = "";
        for(var j=0; j<=6; j++){
            if(maze_array[i][j] == 0){
                line += "□" + " " 
            }else if(maze_array[i][j] == 1){
                line += "■" + " "
            }
        }
        // return line;
        console.log(line);
    }
};
console.log("maze map");
console.log(maze_map());
console.log("□");
// console.log("■");
function array_iteration(){
    var maze_array = [
        [0, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [1, 0, 0, 0, 1, 0, 0],
        [1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0]];
    
    for(var i=0; i<7; i++){
        for(var j=0; j<7; j++){
            // return maze_array[i][j];
            console.log(maze_array[i][j]);
        }   
    }
};
// console.log(array_iteration())


