![image](https://pic4.zhimg.com/80/08235a5dafaaba6f9418704cba12fedd_hd.jpg)


## 判断题：
1. []==false为true，[]为true，{}==false =>NaN为false
    '=='会都转换成数字
2. readonly只针对text和textarea


## 网络题：
- 四次握手：
    1. FIN
    2. ACK
    3. FIN
    4. ACK
- 端口号：
HTTP协议：80/8080/3128/8081/9080
HTTPS协议：默认的端口号为443/tcp 443/udp

- TCP和UDP协议：
[二者区别](https://www.cnblogs.com/xiaomayizoe/p/5258754.html)

TCP可靠，UDP快
UDP发送之前不需要建立连接
UDP支持多对多交互通信
什么时候应该使用TCP： 当对网络通讯质量有要求的时候，比如：整个数据要准确无误的传递给对方，这往往用于一些要求可靠的应用，比如HTTP、HTTPS、FTP等传输文件的协议，POP、SMTP等邮件传输的协议。 在日常生活中，常见使用TCP协议的应用如下： 浏览器，用的HTTP FlashFXP，用的FTP Outlook，用的POP、SMTP Putty，用的Telnet、SSH QQ文件传输 ………… 什么时候应该使用UDP： 当对网络通讯质量要求不高的时候，要求网络通讯速度能尽量的快，这时就可以使用UDP。 比如，日常生活中，常见使用UDP协议的应用如下： QQ语音 QQ视频 TFTP ……

- 网络层是点到点，传输层是端到端

## 计算题

## HTML5题：
1. 新增表单控件：
    - datalist(用户可以自己添加的下拉菜单，只针对input标签)
    - datalist(用户可以自己添加的下拉菜单)

## 跨域题：
- 什么是跨域：协议，域名，端口有任何一个的不同

- get和post请求都能跨域

- get在请求头header，post在请求body内
1. CROS


## ES6题：
1. export 和 export default
```javascript
//导出变量
export const a = '100';  

 //导出方法
export const dogSay = function(){ 
    console.log('wang wang');
}
 //导出方法第二种
function catSay(){
   console.log('miao miao'); 
}
export { catSay };

//export default导出
const m = 100;
export default m; 
//export defult const m = 100;// 这里不能写这种格式。
```
```javascript
//
import { dogSay, catSay } from './testEs6Export'; //导出了 export 方法 
import m from './testEs6Export';  //导出了 export default 

import * as testModule from './testEs6Export'; //as 集合成对象导出
```

## 算法题：
插入排序
希尔排序
冒泡排序
堆排序
归并排序
快速排序
选择排序
