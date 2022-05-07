---
title: 【HTML】基础总结
date: 2022-3-21
categories:
 - HTML
tags:
 - 前端基础
---


# HTML基础总结:

## HTML:是一个超文本标记语言

<h3>元素类型<code></code></h3>

            - 块级元素  
                - div、p、article、footer、section、header、aside、hr、ul、ol、dl、
                  table、h1~h6等 
            - 行内元素 
                - span、a、br、button、label、select、textarea、i、em、strong、script等 
            - 行内块元素 
                - img、input、td

<h3>表格</h3>
<div class="code">
       <pre><table align="center" border="1" height="100" width="200" cellpadding="10" cellspacing="10">
        <!-- 标题 -->
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
        <!-- 行 -->
        <tr>
            <!-- 单元格 -->
            <td>刘岩</td>
            <td>男</td>
            <td>21</td>
        </tr>
        <tr>
            <td>康振</td>
            <td>男</td>
            <td>20</td>
        </tr>
        <tr>
            <td>伍强</td>
            <td>男</td>
            <td>20</td>
        </tr>
        <tr>
            <td>胡天鹏</td>
            <td>男</td>
            <td>19</td>
        </tr>
        <tr>
            <td>宋佩锦</td>
            <td>男</td>
            <td>20</td>
        </tr>
        <tr>
            <td>李芯宇</td>
            <td>男</td>
            <td>20</td>
        </tr>
    </table></pre>
    </div>


            - table 
                - 可以设置宽高
                - cellpadding表示单元边界与单元内容的距离
                - cellspacing表示单元格的距离
            - th
                - 表格的标题 => 会加粗文字
            - tr
                - 表格的一行
            - td
                - 表格单元格
                - 通过colspan修改占的列数
                - 通过rowspan修改占的行数

<h3>表单控件</h3>

```html
<form action="xxx.php" method="get">
		<h3>name和value是后台人员使用,也就是后端</h3>
		<h4>name 才可以实现多选一</h4>
		<h4>value 出现输入时提示信息 （注：在密码中加入不会出现，因为会被隐藏）</h4>
		<h4>text 可以输入文本</h4>
		用户名:
		<input type="text" name="Username" value="请输入用户名">
		<br>
		出生日期 :
		<input type="date" name="age" value="出生日期"> <br>
		<h4>password 输入密码用户看不见</h4><br>
		密 码 :
		<input type="password" name="pwd" maxlength="6"> <br>
		<h4>radio 单选按钮 不会重置按钮</h4>
		性 别:
		男<input checked type="radio" name="sex" value="男">
		女<input type="radio" name="sex" value="女">
		人妖<input type="radio" name="sex" value="人妖"><br>
		<h4>checkbox 可以实现多选</h4>
		爱 好 :
		篮球 <input type="checkbox" name="hobby" value="篮球">
		足球 <input type="checkbox" name="hobby" value="足球">
		乒乓球 <input type="checkbox" name="hobby" value="乒乓球"><br>
		<h4>button普通按钮(多用于JS脚本文件,例如:短信验证码)</h4>
		<h4>checked 是默认选中按钮</h4>
		<input type="button" value="获取短信验证码"> <br>
		<input type="checkbox" checked="checked">我同意注册条款和会员加入标准<br>
		<h4><input type="submit" value="免费注册"></h4>
		<h4>reset 重置按钮 重置数据</h4>
		<input type="reset" value="重新填写">
		<h4>file上传文件</h4><br>
		上传头像<input type="file">
	</form>
```

```
<form action="外部链接.html" method="post" name="name"></form>
<form action="xxx.html"></form>
```

            - form
                - action
                    - 发送或者接受数据的网页
                - method
                    - get/post
                        - get方法只能接受少量数据
                        - post方法的安全性更高

<h3>列表</h3>

```html
<h4>无序列表（重点）</h4>
	<ul>
		<li>榴莲</li>
		<li>臭豆腐</li>
		<li>鲱鱼罐头</li>
		<li>丝瓜</li>
	</ul>
	<h4>有序列表（理解）</h4>
	<ol>
		<li>蔡徐坤</li>
		<li>鸡哥</li>
		<li>鸡哥打篮球</li>
	</ol>
	<h4>自定义列表（重点）</h4>
	<dl>
		<dt>关注我们</dt>
		<dd>新浪微博</dd>
		<dd>官方微信</dd>
		<dd>联系我们</dd>
	</dl>
```

            - 有序列表
                - ol
            - 无序列表(重点)
                - ul
            - 自定义列表
                - dl
                    - dt => 列表头
                    - dd

<h3>图像</h3>

            - img
                - src
                    - 相对路径 => 该文件夹下
                    - 绝对路径 => 在整个电脑下的路径
                - alt
                    - 当图像加载不出来时显示的文字
                - title
                    - 当鼠标悬停时显示的文字

<h3>链接</h3>

        - a
            - href
                - 既可以跳转到文件页面,也可以跳转到网络页面
            - target
                - _blank 跳转到新页面
                - _self  通过自身跳转
        - 锚点链接
            - # + id

<h3>特殊字符</h3>

            - & nbsp 空格
            - & lt   小于
            - & gt   大于

### 综合案例:

```html
<!doctype html>
<html>

<head>
	<meta charset="utf-8">
	<title>综合案例4（注册页面）</title>
</head>

<body>
	<h4 align="center">青春不常在，抓紧谈恋爱</h4>
	<table align="center" width="600" border="1">
		<tr>
			<td>性别：</td>
			<td>
				<input type="radio" name="sex" id="nan"><label for="nan"><img src="images/nan.png" width="15"
						height="15" alt="nan"> 男</label>
				<input type="radio" name="sex" id="nv"><label for="nv"><img src="images/nv.png" width="15" height="15"
						alt="nv"> 女</label><br>
			</td>
		</tr>
		<tr>
			<td>生日：</td>
			<td>
				<select>
					<option selected="selected">--请选择年份--</option>
					<option>1997年</option>
					<option>1998年</option>
					<option>1999年</option>
					<option>2000年</option>
					<option>2001年</option>
					<option>2002年</option>
					<option>2003年</option>
					<option>2004年</option>
					<option>2005年</option>
				</select>
				<select>
					<option selected="selected">--请选择月份--</option>
					<option>1月</option>
					<option>2月</option>
					<option>3月</option>
					<option>4月</option>
					<option>5月</option>
					<option>6月</option>
					<option>7月</option>
					<option>8月</option>
					<option>9月</option>
					<option>10月</option>
					<option>11月</option>
					<option>12月</option>
				</select>
				<select>
					<option selected="selected">--请选择日期--</option>
					<option>1日</option>
					<option>2日</option>
					<option>3日</option>
					<option>4日</option>
					<option>5日</option>
					<option>6日</option>
					<option>7日</option>
					<option>8日</option>
					<option>9日</option>
					<option>10日</option>
					<option>11日</option>
					<option>12日</option>
					<option>13日</option>
					<option>14日</option>
					<option>15日</option>
					<option>16日</option>
					<option>17日</option>
					<option>18日</option>
					<option>19日</option>
					<option>20日</option>
					<option>21日</option>
					<option>22日</option>
					<option>23日</option>
					<option>24日</option>
					<option>25日</option>
					<option>26日</option>
					<option>27日</option>
					<option>28日</option>
					<option>29日</option>
					<option>30日</option>
					<option>31日</option>
				</select><br>
			</td>
		</tr>
		<tr>
			<td>所在地区</td>
			<td>
				<select>
					<option selected="selected">--请选择地区--</option>
					<option>北京</option>
					<option>天津</option>
					<option>上海</option>
					<option>重庆</option>
					<option>内蒙古自治区</option>
					<option>维吾尔自治区</option>
					<option>西藏自治区</option>
					<option>宁夏回族自治区</option>
					<option>香港特别行政区</option>
					<option>澳门特别行政区</option>
					<option>黑龙江省</option>
					<option>吉林省</option>
					<option>辽宁省</option>
					<option>河北省</option>
					<option>山西省</option>
					<option>青海省</option>
					<option>山东省</option>
					<option>河南省</option>
					<option>江苏省</option>
					<option>安徽省</option>
					<option>浙江省</option>
					<option>福建省</option>
					<option>江西省</option>
					<option>湖南省</option>
					<option>湖北省</option>
					<option>广东省</option>
					<option>台湾省</option>
					<option>海南省</option>
					<option>甘肃省</option>
					<option>陕西省</option>
					<option>四川省</option>
					<option>贵州省</option>
					<option>云南省</option>
				</select><br>
			</td>
		</tr>
		<tr>
			<td>婚姻状况</td>
			<td>
				<input type="radio" name="status" id="danshen"><label for="danshen">单身</label>
				<input type="radio" name="status" id="yihun"><label for="yihun">已婚</label>
				<input type="radio" name="status" id="sangou"><label for="sangou">丧偶</label><br>
			</td>
		</tr>

		<tr>
			<td>学历</td>
			<td>
				<select>
					<option selected="selected">--请选择学历--</option>
					<option>小学</option>
					<option>初中</option>
					<option>高中</option>
					<option>专科</option>
					<option>本科</option>
					<option>硕士</option>
					<option>博士</option>
				</select><br>
			</td>
		</tr>
		<tr>
			<td>喜欢的类型</td>
			<td>
				<input type="checkbox" name="type" id="cute"><label for="cute">可爱</label>
				<input type="checkbox" name="type" id="sexy"><label for="sexy">性感</label>
				<input type="checkbox" name="type" id="xiaoxianrou"><label for="xiaoxianrou">小鲜肉</label>
				<input type="checkbox" name="type" id="gentle"><label for="gentle">绅士</label>
				<input type="checkbox" name="type" id="badaozongcai"><label for="badaozongcai">霸道总裁</label>
				<input type="checkbox" name="type" id="laoshiren"><label for="laoshiren">老实人</label>
				<input type="checkbox" name="type" id="allwant" checked="checked"><label for="allwant">全都要</label><br>
			</td>
		</tr>
		<tr>
			<td>自我介绍</td>
			<td><textarea rows="5" cols="100">自我介绍</textarea><br></td>
		</tr>
		<tr>
			<td></td>
			<td><input type="submit" value="免费注册"><br></td>
		</tr>
		<tr>
			<td></td>
			<td><input checked="checked" type="checkbox">我同意注册条款和会员加入标准<br></td>
		</tr>
		<tr>
			<td></td>
			<td>
				<a href="https://login.jiayuan.com/?channel=200&position=102" target="_blank">我是会员，立即登录</a><br>
			</td>
		</tr>
		<tr>
			<td></td>
			<td>
				<h3>我承诺</h3>
				<ul>
					<li>年满18岁</li>
					<li>抱着严肃的态度</li>
					<li>真诚寻找另一半</li>
				</ul>
			</td>
		</tr>
	</table>
</body>

</html>
```

