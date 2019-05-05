Stack = require("./stack_test.js")
var priority_map = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2
};
// infix expression transprot to postfix expression
function infix_exp_2_postfix_exp(exp){
    var stack = new Stack.Stack();
    var postfix_lst = [];
    for(var i=0;i<exp.length;i++){
        var item = exp[i];
        /*save item if it is a number.*/
        if(!isNaN(item)){
            postfix_lst.push(item);
        }else if(item=="("){
            /*item is ( push in stack. */
            stack.push(item);
        }else if(item==")"){
            /*item is ")" pop stack's top element and pop "(" */
            while(stack.top()!="("){
                postfix_lst.push(stack.pop());
            }
            stack.pop();
        }else{
            /*item is operation symbol pop it until stack.top() element priority > 
            current operation symbol priority.*/
            while(!stack.isEmpty() && ["+", "-", "*", "/"].indexOf(stack.top())>=0
            && priority_map[stack.top()]>=priority_map[item]){
                postfix_lst.push(stack.pop());
            }
            stack.push(item);
        }
    }
    while(!stack.isEmpty()){
        postfix_lst.push(stack.pop());
    }
    return postfix_lst;
};
// 20+3
var exp_1 = ["20", "+", "3"];
// (1+(4+5+3)-3)+(9+8)
var exp_2 = ["(", "1", "+", "(", "4", "+", "5", "+", "3", ")", "-", "3", ")", "+","(", "9", "+", "8", ")"];
// (1+(4+5+3)/4-3)+(6+8)*3
var exp_3 = ["(", "1", "+", "(", "4", "+", "5", "+", "3", ")", "/", "4", "-", "3", ")", "+", "(", "6", "+", "8", ")", "*", "3"];
// 4 + 5 * 6
var exp_4 = ["4", "+", "5", "*", "6"];
// 4 * 5 + 6
var exp_5 = ["4", "*", "5", "+", "6"];
console.log("----------------------------");
console.log(infix_exp_2_postfix_exp(exp_1));
console.log(infix_exp_2_postfix_exp(exp_2));
console.log(infix_exp_2_postfix_exp(exp_3));
console.log(infix_exp_2_postfix_exp(exp_4));
console.log(infix_exp_2_postfix_exp(exp_5));