## 技巧：
原则：
1. 减少改动时要编辑的地方
    - 当某些值相互依赖，要反映出依赖关系：  
    按钮：  
        行高设置为字体高度的1.5倍    
        <font color="red">**给html和body设置字体大小和行间距**</font>  
        字体设置为em或者百分比（font-size是根据父级字号来决定的）  
        > em : line-height的em是相对同级font-size  
                padding的em是相对同级的font-size  
                border-radius的em是相对同级的font-size  
               font-size的em是相对父级font-size
2. 统一样式一起写，单独样式单独写：
    ```css
    border-width: 10px;
    border-left-width: 0;   
    ```




## <font color="orange">DOM题：</font>
### <font color="aqua">置换元素？</font>
置换元素是指：浏览器根据元素的标签和属性，来决定元素的具体显示内容。

*例如：浏览器根据<img>标签的src属性显示图片。根据标签的type属性决定显示输入框还是按钮。*

置换元素在其显示中 **生成了框**，这也就是有的内联元素能够设置宽高的原因。

html中的`<img><input><textarea><select><object>`都是置换元素，这些置换元素往往没有实际内容，即是一个空元素。

### <font color="aqua"> reflow 和 repaint：</font>
- 如何引发reflow  
    1. 改变窗口大小

    2. 改变文字大小

    3. 内容的改变，如用户在输入框中敲字

    4. 激活伪类，如:hover

    5. 操作class属性

    6. 脚本操作DOM

    7. 计算offsetWidth和offsetHeight

    8. 设置style属性

- 如何减少reflow？
    1. 不要通过父级来改变子元素样式，最好直接改变子元素样式，改变子元素样式尽可能不要影响父 元素和兄弟元素的大小和尺寸

    2. 尽量通过class来设计元素样式，切忌用style

    3. 实现元素的动画，对于经常要进行回流的组件，要抽离出来，它的position属性应当设为fixed  或absolute

    4. 权衡速度的平滑。比如实现一个动画，以1个像素为单位移动这样最平滑，但reflow就会过于频  繁，CPU很快就会被完全占用。如果以3个像素为单位移动就会好很多。

    5. 不要用tables布局的另一个原因就是tables中某个元素一旦触发reflow就会导致table里所有的  其它元素reflow。在适合用table的场合，可以设置table-layout为auto或fixed，

    6. 这样可以让table一行一行的渲染，这种做法也是为了限制reflow的影响范围。

    7. css里不要有表达式expression

    8. 减少不必要的 DOM 层级（DOM depth）。改变 DOM 树中的一级会导致所有层级的改变，上至根  部，下至被改变节点的子节点。这导致大量时间耗费在执行 reflow 上面。

    9. 避免不必要的复杂的 CSS 选择器，尤其是后代选择器（descendant selectors），因为为了匹  配选择器将耗费更多的 CPU。

    10. 尽量不要过多的频繁的去增加，修改，删除元素，因为这可能会频繁的导致页面reflow，可以先    把该dom节点抽离到内存中进行复杂的操作然后再display到页面上。

    11. 请求如下值offsetTop, offsetLeft, offsetWidth, offsetHeight，    scrollTop/Left/Width/Height，clientTop/Left/Width/Height，浏览器会发生reflow，建议  将他们合并到一起操作，可以减少回流的次数。

## <font color="orange">优先级问题：</font>
### <font color="aqua">伪类的优先级？</font>

如果单独是伪类 `:link` 的优先级是和类一样的，但如果加了其他选择器 `a:link`就会比类高了


## <font color="orange">背景题：</font>

1. background-attachment:fixed可以让背景不随着滚轮滚动
2. xx.style.backgroundColor="red"设置红色背景
3. background-origin:content-box 让背景在内容里显示  

## <font color="orange">文字题：</font>
1. `text-transform:uppercase/lowercase/capitalize` 可以设置大小写

 ## <font color="orange">布局题：</font>
1. box-pack  可以用于背景上放按键，不使用float或者绝对定位
2. <font color="red">`margin/padding`的百分比是以父元素的宽度作为解析的，`margin-top/padding-top` 和 `margin-bottom/padding-bottom` 亦是如此</font>

## <font color="orange">边框题：</font>
1. border-radius: 四个方位横向班级 / 四个方位纵向半径
