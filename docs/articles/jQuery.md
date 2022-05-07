---
title: 【jQuery】API总结
date: 2022-3-28
categories:
 - jQuery
tags:
 - JS框架
---


# jQuery总结:

### 1.转换

```
           - jQuery是基于原生js进行封装的
             一些常见的属性和方法
           - jQuery和js对象可以相互转换 
             => $('div')[index]  | $('div').get(index)
           - jQuery在某些场景下需要转换为
             DOM对象
```

### 2.常用API

```
            - 选择器
                -- $('#id')  id
                -- $('*')  全选
                -- $('.id')  class
                -- $('div')   标签
                -- $('div,p,li')   多选
                -- $('div.current')   交集选择
                -- $('ul li')  孩子选择

            - 隐式迭代
                -- 遍历内部DOM元素(伪数组形式存储)的过程
                -- 给所有元素进行循环遍历,执行相应方法,简化操作
                -- $('div').css('属性','值')
                -- 

            - 筛选选择器
                -- $('li:first')  第一个li元素
                -- $('li:last')   最后一个li元素
                -- $('li:eq(1)')  第二个li元素
                -- $('li:odd')    奇数个元素
                -- $('li:even')   偶数个元素

            - 筛选方法(重点)
                -- $('li').parent();            查找li的父级元素
                -- $('ul').children('li');      查找ul的最近一级(亲儿子)
                -- $('ul').find('li');          查找ul的后代所有li元素
                -- $('.first').siblings('li');  查找兄弟节点,不包括自己本身
                -- $('.first').nextAll();       查找当前元素之后所有的同辈元素
                -- $('.last').preAll();         查找当前元素之前所有的同辈元素
                -- $('div').hasClass('protected') 检查该元素是否有该类名
                -- $('li').eq(2)                查找li里面的第三个元素
                -- $('div').parents('选择器')    查找div的祖先级元素
            - 排他思想
                -- $(function(){
                    $('button').click(function(){
                        当前元素修改样式
                        $(this).css('background','pink')
                        当前元素的兄弟节点修改样式
                        $(this).siblings('button').css('background','')
                    })
                })
            
            - 链式编程
                -- $(function(){
                    $('button').click(function(){
                        $(this).css('background','pink').siblings().css('background','')
                    })
                })

            - 操作CSS方法
                -- 参数只写属性名 => 返回属性值
                -- 当属性值为数字时可以不用加单元和引号
                -- 当参数为多个属性时,用冒号隔开,并用{} 包裹 =>对象的写法
                    -- $(this).css({
                        'font-size':'16px',
                        'color':'red'
                    })
                
            - 设置类样式方法 => 等同于 classList
                -- $('div').addClass('current');   添加类
                -- $('div').removeClass('current') 删除类
                -- $('div').toggleClass('current') 切换类 => 常用于多次点击
```

### 3.jQuery的常见效果

```
            -- 显示隐藏
                -- show()
                    以下效果均为该参数
                    -- show(speed,easing,fn)
                        -- speed => 速度 
                            -- slow
                            -- normal
                            -- fast
                        -- easing => 切换效果
                            -- swing (默认)
                            -- linear
                        -- fn => 回调函数
                    -- hide()
                    -- toggle()
        
            -- 滑动
                -- slideDown()
                -- slideUp()
                -- slideToggle()

            -- 淡入淡出
                -- fadeln()
                -- fadeOut()
                -- fadeToggle()
                -- fadeTo()
                    -- fadeTo(speed,opacity(透明度),easing,fn)
                        -- opacity 取值0-1

            -- 自定义动画
                -- animate()
                    -- animate({params},speed,easing,fn)
                        -- params 是更改的样式属性,以对象形式书写
                        -- {
                            width:500px,
                            top:300px
                            }

            -- 事件切换
                -- hover
                    -- hover(over,out);
                        -- over => 相当于mouseenter(鼠标经过)
                        -- out  => 相当于mouseleave(鼠标移出)
                    -- 注意:
                        -- 如果只在hover里面写一个函数,鼠标经过和移出都会触发
                        -- $('ul').hover(function(){
                            $(this).children('li').slideToggle();
                        })
                    -- 解决动画排队问题
                        -- stop() 写在动画函数前 => 表示停止上一次的动画只执行当前的动画
```

### 4.jQuery属性操作

```
            -- 获取/修改原有属性值
                -- element.prop('属性名')
                    -- $('a').prop.('href')  
            -- 获取/修改自定义属性值
                -- element.attr('属性名')
                    -- $('div').attr('index')      => getAttribute()
                -- element.attr('属性名','值')
                    -- $('div').attr('index','2')  => setAttribute()

            -- 数据缓存 data() => 在指定的元素上存取数据,不会修改DOM元素结构,页面刷新后消失
                -- $('span').data('uname','andy')  => sessionStorage(会话存储)
```

### 5.jQuery内容文本值

```
            -- 获取设置元素内容 html()     => innerHTML
                -- $('div').html()        => 拿到div里面的值
                -- $('div').html('123')   => 修改div里面的值
            -- 获取设置元素文本内容 text()  => innerText()
                -- $('div').text()        => 拿到div里面的文本值
                -- $('div').text('123')   => 修改div里面的文本值
            -- 获取设置表单的值
                -- $('input').val()       => 获取input的value值
                -- $('input').val('123')  => 修改input的value值
```

### 6.jQuery元素操作

```
            -- 遍历
                -- each() => 针对DOM元素的遍历
                    -- 一般each()方法和数组连用 => 通过数组索引来获取改变的样式
                    -- $('div').each(function(index,domel) 
                    })
            -- $.each() => 针对数组、对象
                -- 可以用来遍历任何对象 => 主要用于数据处理,数组、对象
                -- $.each(object,function(index,element) 
                })
            -- 创建
                -- 创建元素
                    -- $('&lt;li>123456&lt;/li>')
            -- 添加
                -- 在内部添加 => 父子关系
                    -- $('ul').append(li)  => 添加到ul内部的最后    => appendchild
                    -- $('ul').prepend(li) => 添加到ul内部的最前面  => insertbefore
                -- 在外部添加 => 兄弟关系
                    -- $('ul').after('内容')  => 添加到ul的后面
                    -- $('ul').before('内容') => 添加到ul的前面
            -- 删除
                -- $('ul').remove() => 删除ul元素
                -- $('ul').empty()  => 删除ul元素内部的子元素
                -- $('ul').html('') => 删除ul元素内部的子元素
```

### 7.jQuery尺寸、位置操作

```
            -- 尺寸
                -- width()/height()             => 取得匹配元素宽度和高度值
                -- innerWidth() / innerHeight() => 取得匹配元素宽度和高度值包含													   padding
                -- outerWidth() / outerHeight() => 取得匹配元素宽度和高度值包含													   padding、border
                -- outerWidth(true) / outerHeight(true) => 取得匹配元素宽度和高度值包														含padding、border、margin
            -- 位置
                -- offset()                     => 相对于文档的位置
                -- position()                   => 相对于带有定位父元素的位置
                -- scrollTop()/scrollLeft()     => 相对于整个文档被卷去的位置
```

### 8.jQuery事件

```
            -- 事件注册
                -- $(function(){
                    $('div').click(function(){
                        $(this).css('background','purple');
                    })
                })
            -- 事件处理
                -- 写法
                    $('div').on({
                        mouseenter:function(){
                            $(this).css('background','purple');
                        },
                        click:function(){
                            $(this).css('background','pink');
                        },
                        ...
                    })
                -- (1).如果事件处理程序函数相同
                    $('div').on('click blur focus',function(){
                        $(this).css('background','purple');
                    })
                -- (2).实现事件委派
                    $('ul').on('click','li',function(){
                        $(this).css('background','purple')
                    })
                -- (3).动态绑定事件
                    $('ul').on('click','li',function(){
                        alert('11');
                    })
                -- off()解绑事件
                    $('div').off();
                    $('div').off('click');
                    $('div').off('click','li');
                -- one()绑定触发一次事件
                    $('div').one('click',function(){
                        ...
                    })
                -- 自动触发事件
                    $('div').click()
                -- 事件对象
                    -- 阻止默认冒泡行为
                        -- stopPropagation()

```

### 9.其他方法

```
            -- jQuery拷贝对象
                -- $.extend(浅拷贝还是深拷贝,拷贝给谁,拷贝谁)
            -- 多库共存
                -- 解决方法
                    $ => jQuery
                    let 变量名 = $.noConflict()
            -- jQuery插件
                -- 瀑布流
                -- 图片懒加载
                    -- 页面滑到可视区域,再显示图片
                -- 全屏滚动插件fullpages.js
```

