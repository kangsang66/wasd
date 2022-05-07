---
title: 【CSS】基础总结
date: 2022-3-23
categories:
 - CSS 
tags:
 - 前端基础
---

# CSS基础总结:

## CSS:层叠样式表

### 选择器

```
			- 基础选择器
                - 标签选择器
                    - HTML标签作为选择器 
                        - 把某一类标签全选
                        - 标签名{
                            属性1:属性1;
                            ...
                        }
                - 类选择器
                    - 类名作为选择器
                        - 可使用多次
                        - 差异化选择
                        - .类名{
                            属性1:属性1;
                            ...
                        }
                    - 可多类名
                        - 空格隔开
                - id选择器
                    - HTML元素Id属性设置
                        - 只能使用一次
                        - #id名 {
                            属性1:属性1;
                            ...
                        }
                - 通配符选择器
                    - * {
                        属性1:属性1;
                        ...
                    }
           - 复合选择器
                - 后代选择器
                    - ul li
                - 子选择器
                    - ul>li
                - 并集选择器
                    - I, 
                      love,
                      you {
                        color:pink;
                      }
                - 伪类选择器
                    - 链接伪类选择器
                      - a:hover {}
```

### 字体属性

```
		  - 字体系列
              - font-family
          - 字体大小
              - font-size
                  - px
                  - rem
                  - vw、vh
          - 字体粗细
              - font-weight
                  - normal
                  - bold
                  - 100-900    
          - 文字样式
              - font-style
                  - normal
                  - italic 斜体
          - 字体复合属性
              - body{
                  font:font-style
                       font-weight
                       font-size/line-height
                       font-family
              }
```

### 文本属性

```
			- 文本颜色
                - color
                    - #000000
                    - pink...
                    - rab(0,0,0) 三原色属性
            - 对齐文本
                - text-align
                    - left   左对齐    默认
                    - right  右对齐
                    - center 居中对齐
            - 装饰文本
                - text-decoration
                    - none         没有装饰线 默认
                    - underline    下划线,链接a自带
                    - overline     上划线
                    - line-through 删除线
            - 文本缩进
                - text-indent
                    - px
                    - em  相对于父级元素的文字大小
            - 行间距
                - line-height
                    - px
                    - 一般设置为盒子的高度达到垂直效果
```

### 引入方式

```html
		  - 行内样式表(行内式)
                - <div> style="width: 200px; height: 200px; background-color: pink;">
                    青春不常在,抓紧谈恋爱
				  </div>
            - 内部样式表(嵌入式)
                - <style>
                    div {
                        width: 200px;
                        height: 200px;
                        background-color: pink;
                    }
                   </style>
            - 外部样式表(链接式)
                  -<link rel="stylesheet" href="index.css">
```

### 元素显示模式

```
			- 块元素
                - 常见块元素div、h1~h6、p、ul、ol、li
                - 特点:
                - 独占一行
                - 可以设置宽高内外边距
                - 可以放行内和块级元素
                - 注意
                  - 文字类元素不能使用块级元素
            - 行内元素
                - 常见行内元素a、span、strong、b、em、i、del、s、ins、u 
                - 特点:
                - 相邻行内元素在一行上
                - 默认宽度为内容宽度
                - 行内元素只能容纳文本或者其他行内元素
                - 注意
                  - 链接里面不能再加链接
                  - 特殊情况链接a可以放块级元素,但需给a转换为块级元素
            - 行内块元素
                - 常见行内块元素img、input、td
                - 特点:
                  - 同时具有块元素和行内元素的特点
                  - 相邻元素会有空白缝隙
                  - 可以设置宽高以及内外边距
            - 元素显示模式转换
                - 转换为块元素
                  - display:block;
                - 转换为行内元素
                  - display:inline;
                - 转换为行内块元素
                  - display:inline-block;
```

### 背景

```
			- 背景颜色
                - background-color:颜色值;
            - 背景图片
                - background-image:url(路径);
            - 背景平铺
                - background-repeat:no-repeat
            - 背景图片
                - background-position:x , y/方位名词;
            - 背景图片固定
                - background-attachment:scroll/fixed;
            - 复合写法
                - background: transparent url(路径) no-repeat fixed top;
            - 背景半透明
                - background:rgba(0,0,0,0.3);
```

### CSS3盒子模型

```
			- 组成
                - margin
                    - margin-left
                        - px 上右下左
                    - margin-right
                    - margin-top
                    - margin-bottom
                - border
                    - border-width
                        - px
                    - border-style
                        - none 默认值
                        - solid 
                        - dashed
                        - dotted
                    - border-collapse
                        - collapse 合并边框
                - padding
                    - padding-left
                        - px 上右下左
                    - padding-right
                    - padding-top
                    - padding-bottom
                - content
            - 外边距合并
                - 两个嵌套的盒子如果都有外边距,父盒子会出现塌陷问题
                    - 解决方法
                        - (1).为父元素添加边框
                            - father {
                                border-top:1px solid;
                            }
                        - (2).为父元素添加内边距
                            - father {
                                padding-top:10px;
                            }
                        - (3).为父元素添加移出隐藏
                            - father {
                                overflow-hidden;
                            }
```

### 圆角边框

```
			- border-radius:$px/$%;
```

### 盒子阴影

```html
			- box-shadow:h-shadow v-shadow blur spread color inset
                - h-shadow:必写,水平阴影位置
                - v-shadow:必写,垂直阴影位置
                - blur:可写,模糊距离
                - spread:可写,阴影的大小
                - color:可写,阴影颜色
                - inset:可写,外部阴影改为内部阴影
            - 来几个好看的样式:
                - box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                    <div style="width: 200px;height: 200px; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; margin:0 auto;"></div>
                - box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
                    <div style="width: 200px;height: 200px;box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; margin:0 auto;"></div>
                - box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
                    <div style="width: 200px;height: 200px; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; margin:0 auto;"></div>
```

### 定位

```
			- 按照定位的方式移动盒子
                - 定位模式 + 边偏移
                - 定位模式
                    - static   静态定位(了解)
                        - 等于标准流
                    - relative 相对定位(重要)
                        - 根据自身位置进行移动
                    - absolute 绝对定位(重要)
                        - 根据父级元素进行移动
                        - 注意:不会占位置
                        - 口诀:子绝父相
                    - fixed    固定定位
                        - 基于浏览器可视区的位置
                        - 注意:不会占位置
                    - sticky   粘性定位(了解)
                        - 基于浏览器可视区的位置
                        - 注意:会占位置
                - 边偏移
                    - top      上边线距离
                    - bottom   下边线距离
                    - left     左边线距离
                    - right    右边线距离
                - 定位叠放次序
                    - z-index
                        - 注意:只有定位的盒子才能设置z-index;
```

### 元素的显示与隐藏

```
			- (1).display     显示隐藏
                    - none    常用
                    - block
            - (2).visibility  显示隐藏 会占据位置
                    - visible 显示
                    - hidden  隐藏
            - (3).overflow    溢出显示隐藏
                    - visible 不剪切内容也不添加滚动条
                    - hidden  不显示溢出部分
                    - scroll  显示滚动条
                    - auto    超出显示滚动条,不超出不显示
```

### 文字阴影

```
			- text-shadow: h-shadow v-shadow blur color;
```

### CSS浮动

```
            - 浮动
                - 传统网页布局三种方式:
                    - 标准流
                    - 浮动
                    - 定位
                - 为什么需要浮动?
                    - 让多个块级元素一行显示
                    - 让两个盒子左右对齐
                - float
                    - none
                    - left
                    - right
                - 特点
                    - 会脱离标准流
                    - 会一行显示并顶部对齐
                    - 具有行内块元素的特点
            - 清除浮动
                - 为什么需要清除浮动?
                    - 父盒子不方便给高度,子盒子浮动后,会影响标准流盒子
                - 如何清除浮动?
                    - (1).额外标签法 => 不推荐
                        - 给浮动元素末尾添加空标签
                            - <div style="clear: both;"></div>
                    - (2).父级添加overflow
                        - 属性值设置为:hidden、auto、scroll
                    - (3).父级添加伪元素法 => 给伪元素添加clear:both
                        - .clearfix:after {
                            content: "";
                            display: block;
                            height: 0;
                            clear: both;
                            visibility: hidden;
                           } 
                    - (4).双伪元素清除浮动
                        - .clearfix:before,.clearfix:after {
                            content:"";
                            display:table;
                           }
                           .clearfix:after {
                            clear:both;
                           }
                           .clearfix {
                            *zoom:1;
                           } 
                        - 优点:
                           - 简洁
                           - 兼容低版本
                    
```

