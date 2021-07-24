<h1>第五课作业</h1>

使用`php_get_contents()` `php_put_contents()`及`输出语句`实现网页版记事本，html已给出，请在相应位置填写代码


`index.php`内容
```php
<!DOCTYPE html>
<html>
	<head>
		<title>第五课作业</title>
	</head>
	<body>
		<form action="index.php" method="POST">
			<div>
				<input type="submit" value="Save">
			</div>		
			<textarea name="text" id="ta1" style="height:95%;width:100%;">
				<?php
					$text = "";
					if (isset($_POST["text"])) //isset会判断一个变量是否被定义 是将返回真
					{
						$text = $_POST["text"];
						//在此处插入php代码
					}
					else
					{
					//在此处插入php代码

					}

					//在此处插入php代码
				?>
			</textarea>
		</form>
	</body>
</html>
```
