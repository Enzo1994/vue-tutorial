## 圆形头像：
```css
  .avatar {
    width: 40px;
    height: 40px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
```


## 文字类：
### 规定文字行数：
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

### 多行省略显示：
```css
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
```

## 盒子：
### 响应式方形div（只设置width情况下）：
```css
  .image {
    float: right;
    margin-left: 25px;
    width: 25.8%;
    div {
      padding-top: 100%;
    }
```


## 边框：
### 不同板块之间间隔横线可以用伪元素


## 背景：
### 盒子显示背景图的正中：
```css
    background: url("../assets/images/p2519070834.jpg") center center cover no-repeat;
```

### 背景图在盒子的正中位置（多针对于icon）：
```css
    background: url("../assets/images/homePageLoading.gif") no-repeat 50% 50%;
```

### svg图标放到方盒子里：

```html
<div class="icon icon-camera"></div>
<div class="icon icon-pen"></div>
```
```css
.icon {
    width: 40px;
    height: 40px;
    padding: 8px;
    margin-right: 10px;
    position: relative;
    float: right;
    box-sizing: border-box;
}
.icon.icon-pen::before {
    background-image: url(/f/talion/d9ba3fa…/pics/card/ic_status_pen.svg);
}
.icon::before {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
```
