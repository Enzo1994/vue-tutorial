## 常量：
常量：const表示


## 作用域：
ES6默认严格模式  
let构建块状作用域  
花括号就能新建块状作用域


## 箭头函数：
#### 遍历数组用map：  
In ES5:  
```
var evens=[1,2,3,4,5];  
var odds = evens.map(function(v){  
    return v + 1  
}
```
In ES6:  
```
let odds = evens.map(v => v + 1)
```
小括号是参数，如果只有一个参数，括号可以省略  
如果花括号中表达式直接作为返回值，也可以省略花括号：
```
function(v){return v + 1} === v => v + 1  
```

##### 关于this的绑定：  
1. 箭头函数导致this总是指向<b style="color:red">函数定义生效时所在的对象（new出来的那个对象）</b>  
2. 箭头函数根本没有自己的this，导致内部的this就是外层代码块的this  
3. 除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target

## 函数新增：
```javascript
{
默认参数：
必要参数如果不传实参抛出错误：   
原理：

function checkParameter(){ //默认参数函数
    throw new Error("Can't be empty" )
};

function f(x=checkParameter() , y = 7 ,z = 42){//自定义的函数
    return x + y + z
}; 

try{
    f()
}catch(e){
    console.log(e)
}finally{}

}
{
    ...rg就是把一系列参数转换成数组 约等于ES5中arguments
    function test(...arg){}
}
{
    ...也可用作数组转字符串：
    a,...[1,2,3] === a 1 2 3
}
{
    尾调用：指某个函数的最后一步是调用另一个函数。
    目的：提升性能，避免递归，如果不断嵌套别的函数，或者函数依赖于别的函数，建议使用
    
}
```

## 对象代理
ES3的数据保护：
```javascript
function Person(){   //构造函数
    var data = {   //私有变量
        name:'Jack',
        age:'24',
        generic:'boy'
    }
    this.get = function(key){
        return data[key]
    }
    this.set = function(key,value){
        if(key !== 'generic'){  //不能修改性别
            data[key] = value
        }
    }
}
var person1 = new Person()
//读取：
console.log(person1.get('name')}
//修改：
person1.set('name','Lucy')
```

ES5的数据保护： 
```javascript
var Person = {
        name:'Lucy',
        age:'23',
    }
Object.defineProperty(Person,'sex',{
    writable:false,
    value:'male'
})

try{
    Person.sex = 'female'
    console.table({
    name:Person.name,
    age:Person.age,
    sex:Person.sex
}
}
catch(e){
    console.log(e)
}
)
```

ES6对象代理：  
使用new Proxy()
```javascript
let Person={
        name:'Lucy',
        age:'23',
        sex:'male'
}
let person = new Proxy(Person,{
    get(target,key){
        return target[key]
    }
    set(target,key,value){
        if(key !== 'sex'){
            target[key] = value
        }
    }
})
```

## 模块化
比如需要：函数暴露出来 类暴露出来  
```javascript
//单独导出
export let A=123;
export function test(){console.log("sss")}
export class Hello{
    test(){
        console.log('class')
    }
}
//统一导出：
export default{A,test,Hello}

//导入
import {A} from './class/lesson17'
import {A,test,Hello} from './' //一个点代表当前层级
//两个点代表父文件夹
import * as lesson from './class/lesson17'

```

## 解构赋值

```javascript
//数组解构赋值One
let a,b;
[a,b] = [1,2];
a //1;
b //2
//Two
let a,b,test;
[a,b,...test] = [1,2,3,4,5,6,7]
a //1
b //2
test //[3,4,5,6,7]


//对象解构赋值
let a,b;
({a,b} = {a=1,b=2})
a //1
b //1
```

## 正则表达式
```javascript
ES5中：
字符串方法：search replace
正则方法：test exec（返回匹配到的内容）
let regexp1 = new RegExp('txt','i')
let regexp2 = new RegExp(/txt/i)

ES6中：
let regexp3 = new RegExp(/txt/ig,'i')
regexp3.flags //i(i可以覆盖之前的设定)



```
修饰符|描述
---|---
g |全局匹配，从上一次匹配到的位置继续
y |全局匹配，从上一次匹配到的位置+^继续(必须顶头开始匹配，顶一次匹配的尾，匹配不到后面有也不继续了) 用/b+/y .sticky判断是否开启粘连
·|使用场景
·|tokenize(TOKEN_Y, '3x + 4') // [ '3' ]  
·|tokenize(TOKEN_G, '3x + 4')  // [ '3', '+', '4' ]  
u|如果处理大于两个字节的字符一定加u：/^.$/u.test('𠮷')，/𠮷{2}/u.test('𠮷𠮷')**,es5中点匹配只能匹配到小于两个字节长度的字符**
s（未实现）|处理点匹配处理不了的换行、回车、行分隔符、段分隔符
**注意**|**点匹配处理不了：大于两个字节长度的字符，换行、回车、行分隔符、段分隔符**

量词|描述
---|---
b+ | 至少有一个b的字符串


## 字符串（上）
总之四字节字符，ES5不能正常处理（大于0xFFFF），ES6新增码点codePoint
#### 安装babel-polyfill兼容库
```
import 'babel-polyfill'
```
超过两个字节的字符：
```javascript
{
大于0xFFFF的Unicode编码字符：
常规unicode表示方法：
'\u0061'  //一个字符
'\u20bb7'  //三个字符，会被拆开（20bb是两个，7是一个）

大于0xFFFF的Unicode编码:
'\u{20bb7}' //不会被拆
}

{
高频：
ES5中for循环遍历字符串，大于0xFFFF的Unicode编码字符会报错，
ES6中新增字符串遍历器 **for(let code of str)**{ console.log('es6',code) } 可以完整显示大于0xFFFF的Unicode编码字符
}

{
ES5：索引找字符str.charAt(index)、索引找字符对应unicode编码str.charCodeAt(index)

**大于0xFFFF的Unicode编码:'\u20bb7'.length是2**
两个字符对应是两个索引0和1
对应两个charAt(0)、charAt(1),charCodeAt(0)、charCodeAt(1)

**toString(16)可以转换为16进制**

ES6新增：str.codePointAt(0)
index为0：默认取前四个字节（𠮷）
index为1：默认取前四个字节中的后两个字节（𠮷）的右半边
index为2：才是下一个完整字符
'\u{20bb7}'.codePointAt(0) //134071 𠮷的unicode
'\u{20bb7}'.codePointAt(1) //57271  𠮷右半边的unicode，相当于chaCodeAt(1)：
'\u{20bb7}'.codePointAt(1)==='\u{20bb7}'.charCodeAt(1)  //true
}

{
ES5中，传入unicode值，返回字符串：
String.fromCharCode(0x20bb7)  //大于0xFFFF的是乱码
ES6中，
String.fromCodePoint(0x20bb7) //大于0xFFFF可以正常显示
}

```
字符串概述：
unicode转字符:ES5中，```String.fromCharCode(0x20bb7)```，ES6中```String.fromCodePoint(0x20bb7)```  
获取索引位置字符对应unicode：ES5中，```str.charCodeAt(0)```，ES6中```str.codePointAt(0)```，**注意索引0和1的区别**  
获取索引位置字符：ES5中```str.charAt(index)```  
遍历字符串：ES5中```普通for循环```，ES6中```for(let code of str){ console.log('es6',code) } //for of遍历```


## 字符串（下）
```javascript
{
    ES6新增：(常用)
    查看某个位置的字符：
    str.at(0)
    包含某个字符：
    str.includes("r")
    判断字符串是不是以...为起始/为结束：
    str.startWith("str")
    str.endWith("ng")
    字符串复制：
    str.repeat(times)
}
{
    自动补0 ：
    '1'.padStart(2,'0') //1日，前补为01日，2是需要的长度
    '1'.padEnd(2,'0')  //后补为10
}
{
    标签模板，处理防止xss攻击，处理多语言转换：
    
    let a=3
    let b=5
    abc`东词${a+b}大\n词`
    function abc(s,v1){
    console.log(s) //["东词", "大↵词", raw: Array(2)]===["东词", "大↵词", ["东词","大\n词"]]

    console.log(v1) //8
    }
    
    第一个参数s是数组，包括非变量替换内容，数组最后一个元素是非变量内容的生肉显示
    第二到n的参数v1,v2....是字符串模板中被替换的变量
}
    
{
    String.raw`hi\nme`，符号自动转义,不会换行
}
```


## 数值扩展：
新增Number对象，集成了parseInt等api
#### 安装babel-polyfill兼容库
```javascript
    二进制数值表示：0b0110110
    八进制数值表示：0o767
    
{
    不常用：
    Number.isFinite(NaN) //是否有尽 参数不是数字，除以0 返回false
    Nmuber.isNaN(NaN) //是否是数字
}
{
    判断是否是整数：
    Number.isInteger() //是否是整数 25.0也返回true 非数返回false
}
{
    如果超过-2^53 ~ 2^53的范围内，js存储就不准了
    两个端点：
    Number.MAX_SAFE_INTEGER  
    Number.MINI_SAFE_INTEGER
    判断是否在有效范围内：
    Number.isSafeInteger(10) //true NAN返回false
    
}
{
    取整：
    Math.trunc(4.1) //相当于floor
}
{
    判断是正数负数还是零：
    Math.sign(-5) //-1代表负数 0代表0 1代表正数 字符串会转换为数字 其他为NaN
    返回：-1 0 1 NaN
}
{
    立方根：
    Math.cbrt(8) //2
}
{
    三角函数。。。
}
```

## 数组扩展：
```javascript
{
    声明空数组时，可以规定长度
    const arr = new Array(length).fill('0')  //规定长度为active，0填充的数组
}
{
    一组数据转数组：
    Array.of(1,2,3,4,5)  //[1,2,3,4,5]
    Array.of(() //[]
}    
{
    如何判断类数组？length属性决定此对象为类数组对象
    类数组转数组（html元素集合转为数组）
    const pArr = Array.from(p) //document.getElementsByTagName("p")
    pArr.forEach(function(item){
        console.log(item.textContent)
    })
    
    不仅转换，还具有map功能（map就是映射，map跑一遍数组，然后把每个元素都操作一下返回出来）：
    Array.from([1,3,5],function(item){return item+2})
    
注解：
    innerText属性的值，和你将这个元素内容复制粘贴到记事本里的内容一致（能看见的内容） 
    textContent属性的值，隐藏不隐藏都能获取到
}
{
    数组内部元素替换：
    fill本意是填充
    [1,'a',undefined].fill(7)  //所有元素都被替换为7
    ['a','b','c'].fill(7,1,3)  //用7替换[1,3)区间内的元素
}
{
    常用：
    for of遍历： 
    for(let index of ['a','b','c'].keys()) //遍历数组的元素索引
    for(let value of ['a','b','c'].values()) //遍历数组的元素值 需polyfill兼容
    for(let [index,value] of ['a','b','c'].entries()) //遍历数组的index和value
}
{
    将指定位置的成员复制到其他位置:
    copyWithin并不要求其作用的target是一个数组对象。
    将指定位置的成员复制到其他位置，length属性决定此对象为类数组对象，因此可使用copyWithin方法；
    array.copyWithin(target, start[, end = this.length])
    array.copyWithin(target, start, end)
    target：复制到指定目标的索引位置
    start：被复制元素的起始位置
    end：被复制片段的结尾 (默认为 array.length)。如果为负值，表示倒数。
    
    将start到end之间指定的子元素复制到arr中target指定的开始位置，并返回arr,
}
```
### 重要：
```[].copyWithin.call({length: 5, 3: 1}, 0, 3); //结果：{0:1,3:1,length:5}```  
①对象有length，可以判定为类数组  
②对象有key，有value，可以判定和数组对象等价  
③target是0，start是3，类数组形式[undefined,undefined,undefined,1,undefined,undefined]，把start索引是3的片段复制到索引start为0的片段上  
④最后返回一定是和传入一样的对象格式，因为用了call   

```javascript
{
    找出第一个符合条件的数组元素：
    arr.find(function(item){return item>4})  //返回第一个大于4的值
    arr.findIndex(function(item){return item>3})  //返回第一个item>4的值的索引
}
{
    常用：
    找出是否包括某个元素：
    arr.includes(3)
}
```


## 对象扩展：
```javascript
{
    //简洁表示法：
    let o=1;
    let k=2;
    ES5中：
    let es5={
        o:o,
        k:k,
        hello:function(){
            console.log('hello')
        }
    }
    ES6中：
    let es6={
        o,
        k,
        hello(){
            console.log('hello')
        }
    }
}

{
    //属性表示法
    let a='b';
    let es5_obj={
        a:'c'
    }
    let es6_obj={
        [a]:'c'   //注意这里[a]是取变量，值为b，所以相当于'b':'c'
    }
}
{
    //新增API：
    //判断引用是否相等：
    Object.is([],[]) //两个空数组引用不同，fasle，Object.is和===一样
    
    //对象拷贝（浅复制）（对象合并）：
    1、深浅只是拷贝引用和拷贝具体值的区别    
    2、Object.assign只拷贝自身属性，不继承；
    3、不拷贝不可枚举属性
    Object.assign({a:'a'},{b:'b'})  //{a:'a',b:'b}'
    
    //类似数组entries遍历
    常用
    for of遍历
    let test = {k:123,0:456}
    for(let [key,value] of Object.entries(test)){
        console.log([key,value])
    }
}
{
    
}
```

## Symbol数据类型：
用这种方式声明的数据类型永远不相等
```javascript
{
    //声明
    let a1=Symbol();
    let a2=Symbol();
    let a3=Symbol.for('a3');
    let a4=Symbol.for('a3'); //a3===a4
}
{
    //用法：
    主要针对属性名key的重复值问题(可惜遍历不到symbol类型属性名)
    let a1=Symbol.for('abv')  //Symbol(abc)
    let obj={
        [a1]:'a',  //Symbol(abc)
        'abc':'a',  //'abc' 和上面不冲突
        'c':2345
    } 
    
    遍历不到symbol类型的key怎么办？

    Object.getOwnPropertySymbols(obj) //返回的是数组，只能取key为Symbol值的属性
        .forEach(function(item){
            console.log(obj[item])
        })

    常规key、Symbolkey都想得到怎么办？
    
    Reflect.ownKeys(obj)  //可得到所有key
        .forEach(function(item){
            console.log(item,obj[item])
        })
    相当于：Object.getOwnPropertyNames和Object.getOwnPropertySymbols：
}
{

}
```

## Set 和 weakSet
```javascript
set只是获取引用 修改直接修改被引用对象 没有引用对象，用forEach修改
{
    let list = new Set(arr)  //不可重复，可传入数组以去重
    
    list.size  //size获取集合长度
    list.add() //add增加集合元素（重复增加无效）
    list.has()  //判断有无
    list.delete()  
    list.clear  
}
{
    遍历集合：
    for of遍历：
    for(let key of list.keys())
    for(let key of list.values())
    for(let [leu,value] of list.entries())
    
    list.forEach(function(item){console.log(item))
}
{
    weakSet只能是对象，元素都是地址引用，不关心是否已被回收，回收机制完全无视
    没有clear方法，没有size属性，不能遍历
}
```

## Map和weakMap
```javascript
{
    let map = new Map()
    let arr = ['abc']
    
    map.set(arr,456)  //set(key,value) key可以是任何值
    map.get(arr)  //456
}
{
    let map = new Map([["a",123],["b",456]])
    map.size //长度
    map.delete(key)
    map.clear()
}
{
    map的遍历：
    for(let [index,item] of omit.entries()){
        self.omit.set(index,item)
    }
}

    注意：
    只有对同一个对象的引用，Map结构才将其视为同一个键。这一点要非常小心。
    虽然NaN不严格相等于自身，但Map将其视为同一个键。
    如果Map的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map将其视为一个键，包括0和-0
    
    总结：
    实例属性和方法：size、set、get、has、delete、clear
    遍历方法：keys（）、values（）、entries（）、forEach（）

{
    weakMap：
    key值也必须是对象，也没有size属性，也不能使用clear，也不能遍历
    
    let weakmap = new WeakMap();
    let o={};
    weakmap.set(o,123);
    weapmap.get(o)
}

```

##### Map对比Array
```javascript
//数据增查改删：
let map = new Map();
let array=[];
//增：
map.set('t',1);
array.push({t:1});
array.unshift({t:1})

//查
let map_exist = map.has('t')  //true
let array_exist = array.find(item=>item.t)  //{t:1} 如果存在返回这个值（对象）

//改
map.set('t',2);
array.forEach(item=>item.t?item.t=2:'')  //数组需要先判断这个t是否存在，如果存在改值

//删
map.delete('t')
let index = array.findIndex(item=>item.t) //找到item.t的索引值
array.splice(index,1)  //删除索引为index的1个

```

##### Set对比Array
```javascript
let set = new Set();
let array = [];

//增
set.add({t:1});
array.push({t:1});

//查
let set_exist = set.has({t:1})
let array_exist = array.find(item=>item.t) 

//改
set.forEach(item=>item.t?item.t=2:''); //set修改直接修改被引用对象 或者forEach修改
array_exist.forEach(item=>item.t?item.t=2:'')

//删：
set.forEach(item=>item.t?set.delete(item):'') //先找到值再删除
let index = array.findIndex(item=>item.t) //找到索引再删除
array.splice(index,1)
```

##### Set、Map和Object对比
```javascript
let item = {t:1};
let map = new Map();
let set = new Set();
let obj = {};

//增
map.set('t',1);
set.add(item);
obj['t'] = 1;

//查
map.has('t');
set.has(item);
't' in obj

//改
map.set('t',2);
item.t = 2  //set修改直接修改被引用对象 或者forEach修改
obj['t'] = 2

//删
map.delete('t');
set.delete(item);
delete obj['t']
```


## Proxy对象代理
二者方法一模一样
不直接操作对象，用户直接操作代理

```javascript
{
let obj = {
    time:'2018-06-01'.
    name:'net',
    _r:123
}

let proxy = new Proxy(obj,{get(target,key){
    
},set(target,key,value){
    
}})
let monitor = new Proxy(obj,{
    //拦截对象获取属性
    get(target,key){
        return target[key].replace('2017'.'2018')
    },
    //拦截对象设置属性
    set(target,key,value){
        if(key === 'name'){
            return target[key] = value;  //name属性可修改
        }else{
            return target[key]  //其他不可修改
        }
    },
    //拦截 key in object 操作(只暴露name属性)
    has(target,key){
        if(key === 'name'){
            return target[key]
        }else{
            return false
        }
    },
    //拦截删除属性操作
    deleteProperty(target,key){
        if(key.indexOf('_') > -1){  //删除_r属性
            delete target[key];
            return true
        }else{
            return target[key]
        }
    }，
    //拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
    ownKeys(target){
        return Object.keys(target).fillter(item=>item!='time')
    } //输出测试Object.keys(monitor)  =>  name,_r

})
}
```
## Reflect
少直接用obj.time获取属性值，多用Reflect
```javascript
{
let obj = {
    time:'2018-06-01'.
    name:'net',
    _r:123
}
Reflect.get(obj,'time') 
Reflect.set(obj,'name','mukewang')
Reflect.has(obj,'name')
}
```

## Proxy和Reflect实例：解耦和
数据类型校验 判断手机号格式
```javascript
function validator(target,validator){
    return new Proxy(target,{   //proxy对象通过对target的代理
        _validator:validator,  //保存配置选项
        set(target,key,value,proxy){
            if(target.hasOwnProperty(key)){
                let va = this._validator[key];
                if(!!va(value)){
                    return Reflect.set(target,key,value,proxy)
                }else{
                    throw Error(`不能设置${key}到${value}`)
                }
            }else{
                throw Error(`${key} 不存在`)
            }
        }
        
    })
}
const personValidators = {  //真正的过滤选项在此（校验条件）
    name(val){
        return typeof val === 'string'  //判断name数据类型是不是字符串，如果满足，允许代理修改字符串
    }
    age(val){
        return typeof val === 'number' && val>18 
    }
    mobil(val){
        //可任意新增
    }
}
class Person{  
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.mobile = '1111'
        return validator(this,personValidators) //返回的不是this是对this的代理
    }
}
const person = new Person('lilei',30) //实际上得到的是一个对Person实例对象代理的Person对象
```

## 类和对象
静态方法，静态属性，继承，getter、setter
- constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。

```javascript
{
    // 类的基本定义和生成实例
    class Parent{
        constructor(name='mukewang'){
            this.name=name
        }
    }
    let v_parent = new Parent('v')
}

{
    // getter,setter
    class Parent{
        constructor(name='mukewang'){
            this.name=name
        }
        
        get longname(){
            return 'mk'+this.name
        }
        
        set longName(value){
            this.name = value
        }
    }
    
        let v = new Parent()

}

{
    // 静态方法
    class Parent{
        constructor(name='mukewang'){
            this.name=name
        }
        
        static tell(){  //静态方法-通过类调用，不是通过类的实例调用
        
        }
    }
    
    Parent.tell()
    

}
{
    // 静态属性
    class Parent{
        constructor(name='mukewang'){
            this.name=name
        }
        
        static tell(){  //静态方法-通过类调用，不是通过类的实例调用
        
        }
    }
    Parent.type = 'test'  //静态属性的设置
    
    Parent.tell()  //通过类调用静态方法
    

}
```

## 继承：
```javascript
{
    // 继承
    class Parent{
        constructor(name='mukewang'){
            this.name=name
        }
    }
    
    class Child extends Parent{  // extends表示继承
        super()  //子类没有自己的this，需要继承父亲的
    }
}
{
    // 继承传递参数
    class Parent{
        constructor(name='mukewang'){
            this.name=name
        }
    }
    
    class Child extends Mix(..,..,..){  // extends表示继承 , Mix(.,..,..)表示多重继承
        constructor(name='child'){
            super(name)  //ES6 要求，子类的构造函数必须执行一次super函数。
            this.type = 'child'
        }
    }
}

```
#### new.target：
```javascript
function Person(name) {
  if (new.target !== undefined) {
    this.name = name;
  } else {
    throw new Error('必须使用 new 命令生成实例');
  }
}
```
ES6 为new命令引入了一个new.target属性，该属性一般用在构造函数之中，返回new命令作用于的那个构造函数。  
- 如果==构造函数不是通过new命令调用的，new.target会返回undefined==.
- Class 内部调用new.target，返回当前 Class。  
- 子类继承父类时，new.target会返回子类。  
- 利用这个特点，可以写出不能独立使用、必须继承后才能使用的类：
```javascript

class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('本类不能实例化');
    }
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    // ...
  }
}

var x = new Shape();  // 报错
var y = new Rectangle(3, 4);  // 正确
```

#### super()：
- 虽然代表了父类A的构造函数，但是==返回的是子类B的实例==，即super内部的this指的是B，因此super()在这里相当于A.prototype.constructor.call(this)，super()内部的this指向的是B。  
- super.c()就相当于A.prototype.c()。  

比如：
```javascript
class A {
    constructor(age = 33){
        this.age = age
    }
    getName(){
        return this.name
    }
}
class B extends A {
    constructor(name='ss') {
        super();  //A.prototype.constructor.call(this) ,构造函数设定共享属性，super()把父类构造函数里的共享属性互通，子类构造函数里共享属性默认互通
        this.name = name
        console.log(this.age)
    }
}
const b = new B('ll')
console.log(b.getName()) //通过子类的实例super()给父类传属性，可以统一在子类传属性，让所有父类拿到属性并使用
```


```javascript
class A {
    constructor() {
     console.log(new.target.name); //new.target指向当前正在执行的函数,Function.name会返回函数名
    }
   }
   class B extends A {
    constructor() {
     super();
    }
   }
   new A()  //A
   new B()  //B
```




## Promise
解决回调看不出顺序问题
```javascript
{
    //模拟ajax过程
    let ajax = function(callback){
        setTimeout(function(){  //模拟接收延迟
            callback&&callback.call()  //判断回调是否存在
        })
    };
    ajax(function(){
        console.log('timeout1')
    })
}
{
    let ajax = function(){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve()
            }, 2000);
        })
    }
    ajax().then(()=>console.log(2)) //then返回也是promise实例
}
{
    //then会返回一个promise对象，可以链式操作
    let ajax = function(){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve()
            }, 2000);
        })
    }

        ajax()
          .then(()=>{
                return new Promise((resolve,reject) => {
                    setTimeout(()=>{
                        resolve()
                    },1000)
                })
            })
          .then(()=>{alert(2)})
}
{
    //捕获错误
    let ajax = function(num){
    return new Promise((resolve,reject)=>{
        if(num>5){  //如果num大于5，执行下一步操作
            resolve()  //下一步操作
        }else{
            throw Error('出错了')  //否则抛出错误，用catch捕获
        }
    })
}

    ajax(2)
      .then(console.log(2))
      .catch(function(err){console.log('catch',err)})
}
{
//实例：feed流，全部加载完成，触发Promise.all（多个Promise实例合并成一个promise实例）再统一显示
    //所有图片加载完再加载到页面：
    function loadImg(src){
        return new Promise((resolve,reject)=>{  //单个Promise实例
            let img = document.createElement('img');
            img.src = src;
            img.onload = function(){
                resolve(img)
            };
            img.onerror = function(err){
                reject(err)
            }
        })
    }
    function showImgs(imgs){
        imgs.forEach(function(img){
            document.body.appendChild(img)
        })
    }
    Promise.all([  //把多个promise实例当成一个promise实例（所有图片都载入完毕才会插入到html）
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528020764898&di=9278f341cfa8c4e864945c47e135b127&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0129ad57be61980000018c1bca4581.jpg%402o.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528020764898&di=9278f341cfa8c4e864945c47e135b127&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0129ad57be61980000018c1bca4581.jpg%402o.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528615553&di=7f6bd4b8afa4ada75de62a892accdfc5&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ea8e5825970ba84a0e282bde1bca.JPG%402o.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528615553&di=7f6bd4b8afa4ada75de62a892accdfc5&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ea8e5825970ba84a0e282bde1bca.JPG%402o.jpg')
    ]).then(showImgs) //显示图片的逻辑
}
{
    //加载完毕立即显示（只显示第一个加载完的图片）：
        Promise.race([ //先加载完毕先显示，其他忽略不管
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528020764898&di=9278f341cfa8c4e864945c47e135b127&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0129ad57be61980000018c1bca4581.jpg%402o.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528020764898&di=9278f341cfa8c4e864945c47e135b127&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0129ad57be61980000018c1bca4581.jpg%402o.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528615553&di=7f6bd4b8afa4ada75de62a892accdfc5&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ea8e5825970ba84a0e282bde1bca.JPG%402o.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528615553&di=7f6bd4b8afa4ada75de62a892accdfc5&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ea8e5825970ba84a0e282bde1bca.JPG%402o.jpg')
    ]).then(showImgs) //显示图片的逻辑
}
```

## iterator和for...of循环
iterator自定义遍历接口：  
1、任何数据结构只要部署iterator接口，都可以完成遍历操作  
2、Symbol.iterator：凡是部署了```Symbol.iterator```属性的数据结构，就称为部署了遍历器接口。调用这个接口，就会返回一个遍历器对象。对象需要实现一个==迭代协议==，即拥有一个```Symbol.iterator```属性,```table[Symbol.iterator]```的值，必须是一个符合“迭代协议”的函数，即它需要返回一个类似于```{ next: function () {} }```的对象。
```javascript
table[Symbol.iterator] = function () {
   return {
    next() {
        if (index < self.data.length) {
            return {
                value: self.data[index++],
                done: false
            };
        } else {
            return { value: undefined, done: true };}
  }
}
```
3、在ES6中，有三类数据结构原生具备Iterator接口：数组、某些类似数组的对象、Set和Map结构。  
4、一些场合会默认调用Iterator接口（即Symbol.iterator方法），除了下文会介绍的for...of循环，还有几个别的场合。
解构赋值
扩展运算符(...)
yield*_yield*后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口。
由于数组的遍历会调用遍历器接口，所以任何接受数组作为参数的场合，其实都调用  
5、遍历器对象除了具有next方法，还可以具有return方法和throw方法。如果你自己写遍历器对象生成函数，那么next方法是必须部署的，return方法和throw方法是否部署是可选的。

什么是iterator接口？
```javascript
{
    let arr = ['hello','world'];
    let map = arr[Symbol.iterator]()  //数组接口已经写好
    map.next()
}
{
    //自定义iterator接口(obj没有内置接口，需自定义)
    let obj = {
        start:[1,3,2],
        end:[7,9,8],
        [Symbol.iterator](){  //自定义iterator接口写在对象内
            let self = this;
            let index = 0;
            let arr = self.start.concat(self,end);
            let len = arr.length;
            return{   //返回一个对象，包含next方法
                next(){    //写遍历过程
                    if(index<len){  //满足条件，操作当前元素
                        return {
                            value:arr[index++],  //当前索引累计加一
                            done:false
                        }
                    }else{  // 不满足条件，遍历结束
                        return {
                            value:arr[index++],
                            done:true
                        }
                    }
                }
            }
        }
    }
        //要求：先遍历start，再遍历end
}
{
    //for...of：如果没有部署iterator接口，无法使用for of遍历
    let arr = ['hello','world']
    for (let value of arr){
        console.log('value',value)
    }
}

```

## generator
next函数、yield*语法 每个步骤的标志是yield或者return，调用next函数进行下一步



```javascript
//next的用法：
let tell = function* (){
    yield 'a';
    yield 'b';
    return 'c'
};

let k = tell();

console.log(k.next());//{value: "a", done: false}
console.log(k.next());//{value: "b", done: false}
console.log(k.next());//{value: "c", done: true}
console.log(k.next());//{value: undefined, done: true}


//yield的用法：
let obj = {};
        obj[Symbol.iterator] = function* (){
            yield 1;
            yield 2;
            yield 3;
        };

        for(let value of obj){
            console.log(value);//1 2 3
        }


//状态机：
let state = async function (){
    while(1){
        await 'A';
        await 'B';
        await 'C';
    }
}
let status = state();
console.log(status.next());//{value: "A", done: false}
console.log(status.next());//{value: "B", done: false}
console.log(status.next());//{value: "C", done: false}
console.log(status.next());//{value: "A", done: false}



//抽奖
let draw = function (count) {
    //具体业务逻辑
    console.info(`剩余${count}次`)
};

//计算剩余次数，原来使用的是全局变量，现在通过generator来进行判断
let residue = function* (count){
    while (count>0){
        count--;
        yield draw(count);
    }
};
let star = residue(5);
let btn = document.createElement('button');
btn.id = 'start';
btn.textContent = '抽奖';
document.body.appendChild(btn);
document.getElementById('start').addEventListener('click', function (){
    star.next();
},false);



//轮询
let ajax = function* (){
    yield new Promise(function(resolve, reject){
        //这里应该写请求，现在使用定时器代替
        setTimeout(function (){
            resolve({code:0});
        },200);
    });
};

let pull = function (){
    let generator = ajax();
    let step = generator.next();
    step.value.then(function(d){
        if(d.code != 0){
            setTimeout(function (){
                console.log('wait');
                pull();
            },1000);
        }else{
            console.log(d);//{code: 0}
        }
    });
};
pull();
```

## decorator：
定义：函数用来修改类的行为：是一个函数，修改行为，修改类的行为（只在类里有用）
#### 必须插件：babel-plugin-transform-decorators-legacy --save-dev,同时babelrc文件写入"plugins":["transform-decorators-legacy"]



##### target：  
**作用在方法上的decorator接收的第一个参数（target）是类的prototype；**  
**如果把一个decorator作用到类上，则它的第一个参数target是类本身**


```javascript
{ //修饰器在类里面：

    //先定义函数：
  let readonly=function(target,name,descriptor){
    descriptor.writable=false;
    return descriptor
  };

  class Test{
    @readonly
    time(){
      return '2017-03-11'
    }
  }

  let test=new Test();

  // test.time=function(){
  //   console.log('reset time');
  // }; 将报错  如果修改的话

  console.log(test.time());
}
{
    //如果觉得参数不够用，可以
    let log = (type)=>{  //再套一个函数

        return function(target,name,descriptor){
        }
    }
}
{
    //修饰器写在类名前：
  let typename=function(target,name,descriptor){
    target.myname='hello';
  }

  @typename
  class Test{

  }

  console.log('类修饰符',Test.myname);//hello
  // 包含常规修饰器的第三方库修饰器的js库：core-decorators; npm install core-decorators
        
}
{
    //案例：日志系统，埋点（为广告做日志统计：点击、展示）
    let log = (type)=>{  //type是click或者show

        return function(target,name,descriptor){
            let src_method=descriptor.value;
            descriptor.value=(...arg)=>{  //在方法上添加新语句，用apply修改this指向
            src_method.apply(target,arg);
            console.info(`log ${type}`);   //new Image.src接口写这就可以（埋点）
            
            }
        }
    }

    class AD{
        @log('show')
        show(){
            console.info('ad is show')
        }
        @log('click')
        click(){
            console.info('ad is click');
        }
    }

    let ad=new AD();
    ad.show();
    ad.click();
}
```
