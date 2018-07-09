## reflow 和 repaint：
- 如何引发reflow
1：改变窗口大小

2：改变文字大小

3：内容的改变，如用户在输入框中敲字

4：激活伪类，如:hover

5：操作class属性

6：脚本操作DOM

7：计算offsetWidth和offsetHeight

8：设置style属性

- 如何减少reflow？
1：不要通过父级来改变子元素样式，最好直接改变子元素样式，改变子元素样式尽可能不要影响父元素和兄弟元素的大小和尺寸

2：尽量通过class来设计元素样式，切忌用style

3：实现元素的动画，对于经常要进行回流的组件，要抽离出来，它的position属性应当设为fixed或absolute

4：权衡速度的平滑。比如实现一个动画，以1个像素为单位移动这样最平滑，但reflow就会过于频繁，CPU很快就会被完全占用。如果以3个像素为单位移动就会好很多。

5：不要用tables布局的另一个原因就是tables中某个元素一旦触发reflow就会导致table里所有的其它元素reflow。在适合用table的场合，可以设置table-layout为auto或fixed，

6：这样可以让table一行一行的渲染，这种做法也是为了限制reflow的影响范围。

7：css里不要有表达式expression

8：减少不必要的 DOM 层级（DOM depth）。改变 DOM 树中的一级会导致所有层级的改变，上至根部，下至被改变节点的子节点。这导致大量时间耗费在执行 reflow 上面。

9：避免不必要的复杂的 CSS 选择器，尤其是后代选择器（descendant selectors），因为为了匹配选择器将耗费更多的 CPU。

10: 尽量不要过多的频繁的去增加，修改，删除元素，因为这可能会频繁的导致页面reflow，可以先把该dom节点抽离到内存中进行复杂的操作然后再display到页面上。

11：请求如下值offsetTop, offsetLeft, offsetWidth, offsetHeight，scrollTop/Left/Width/Height，clientTop/Left/Width/Height，浏览器会发生reflow，建议将他们合并到一起操作，可以减少回流的次数。

## 伪类的优先级？
如果单独是伪类 `:link` 的优先级是和类一样的，但如果加了其他选择器 `a:link`就会比类高了


## 置换元素？
置换元素是指：浏览器根据元素的标签和属性，来决定元素的具体显示内容。

*例如：浏览器根据<img>标签的src属性显示图片。根据标签的type属性决定显示输入框还是按钮。*

置换元素在其显示中 **生成了框**，这也就是有的内联元素能够设置宽高的原因。

html中的<img><input><textarea><select><object>都是置换元素，这些置换元素往往没有实际内容，即是一个空元素。


## 背景题：
1. background-attachment:fixed可以让背景不随着滚轮滚动
2. xx.style.backgroundColor="red"设置红色背景

## 文字题：
1. text-transform:uppercase/lowercase/capitalize 可以设置大小写
