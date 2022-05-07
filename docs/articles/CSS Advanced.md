---
title: 【CSS】进阶总结
date: 2022-3-24
categories:
 - CSS 
tags:
 - 前端基础
---


# CSS进阶总结:

### CSS高级技巧



### 精灵图(sprites)

```
			- 为什么需要精灵图?
                - 减少浏览器与服务器的请求与发送的次数
            - 原理
                - 将网页中的小背景图合成一张大图
                - 只需要请求一次
            - 使用方法
                - 通过background-position来调整精灵图位置的变化
                - 一般情况下精灵图都是负值
            - 优点
                - 方便使用
            - 缺点
                - 图片文件还是很大
```

### 字体图标(iconfront)

```
            - 推荐下载网站
                - iconmoon
                - 阿里iconfront
            - 字体图标的引入
                - @font-face {
                    font-family: 'icomoon';
                    src: url('fonts/icomoon.eot?7kkyc2');
                    src: url('fonts/icomoon.eot?7kkyc2#iefix') 
                    format('embedded-opentype'),
                    url('fonts/icomoon.ttf?7kkyc2') format('truetype'),
                    url('fonts/icomoon.woff?7kkyc2') format('woff'),
                    url('fonts/icomoon.svg?7kkyc2#icomoon') format('svg');
                    font-weight: normal;
                    font-style: normal;
                   }
            - 使用方法 
                - 将需要使用的内容添加 
                    - font-family: 'icomoon';
```

### CSS 三角

 <div style="width: 0;
            height: 0;
            line-height: 0;
            font-size: 0;
            border: 50px solid transparent;
            border-left-color: pink;margin:0 auto;"></div>  


```html
			- 代码
                &lt;div style="width: 0;
                    height: 0;
                    line-height: 0;
                    font-size: 0;
                    border: 50px solid transparent;
                    border-left-color: pink;margin:0 auto;
                &lt;/div>
```

#### 																									- 京东三角	

<div class="jd" style="position: relative;
                width: 120px;
                height: 249px;
                background-color: tomato;
                margin: 0px auto;">
                <div class="sj" style="position: absolute;
                    right: 20px;
                    top: -20px;
                    width: 0;
                    height: 0;
                    border: 10px solid  transparent;
                    border-bottom-color: tomato;"></div>
            </div>


### CSS 用户界面样式

```
            - 界面样式
                - 更改用户操作的样式
                    - 鼠标样式
                        - cursor:
                            - default       默认
                            - pointer       小手
                            - move          移动
                            - text          文本
                            - not-allowed   禁止
                    - 表单轮廓
                        - outline:
                            - none  去掉input默认蓝色边框
                    - 防止表单域拖拽
                        - resize
                            - none  防止文本域右下角拖拽
```

### vertical-align属性应用

```
            - 使用场景
                - 设置图片或者表单和文字垂直对齐
                - 只适用于行内元素或者行内块元素
            - 语法
                - vertical-align:baseline;  默认基线
                - vertical-align:top;       最高元素顶端对齐
                - vertical-align:middle;    父元素中部
                - vertical-align:bottom;    最低元素顶端对齐
            - 解决图片底部默认空白缝隙的问题
                - 案例
                <div style="border: 2px solid #ccc;width: 500px; height: 192px; margin: 0 auto;" >
                    <img src="images/小米.png" alt="" style="vertical-align:top;">
                </div>
                - 解决办法 
                    (1).给图片添加vertical-align:middle/bottom/top等(提倡使用)
                    (2).让图片转换为块级元素
```

### 溢出的文字省略号显示

```
            - 单行文本溢出显示省略号
                (1). 先强制一行内显示文本
                    white-space: nowrap; (默认 normal 自动换行)
                (2). 超出的部分隐藏
                    overflow: hidden;
                (3). 文字用省略号替代超出的部分
                    text-overflow: ellipsis;
```

#### 																										\- 案例

<p style=" width: 120px;
                    height: 40px;
                    background-color: skyblue;
                    /* 1.先将第一行文字强制显示文本 */
                    white-space: nowrap;
                    /* 2.将超出的部分隐藏 */
                    overflow: hidden;
                    /* 3.text-overflow:ellipsis */
                    text-overflow:ellipsis;
                    margin:0 auto;">被省略了这段文字需要</p>


```
            - 多行文本溢出显示省略号 => 有较大兼容性问题
                - 推荐让后端人员来做
                - overflow: hidden;
                  text-overflow: ellipsis;
                  /* 弹性伸缩盒子模型显示 */
                  display: -webkit-box;
                  /* 限制在一个块元素显示的文本的行数 */
                  -webkit-line-clamp: 2;
                  /* 设置或检索伸缩盒对象的子元素的排列方式 */
                  -webkit-box-orient: vertical;
```

### 常见布局技巧

```
            - (1).margin负值运用
                - 当多个盒子浮动时,边框会重叠
                    - 可以让后面的盒子设置margin负值来覆盖边框
            - (2).文字围绕浮动元素
                - 给文字区域添浮动
```

