# 前端作业(Day4)
欢迎来到前端作业Day4, 今天你有如下任务(15-40min 完成), 你需要在明天之前完成作业.

## 1.0 环境设置
下载[HW04Pack.zip](HW04Pack.zip)并解压, 用VSCode打开文件夹即可开始编写作业

## 2.0 第一题
请用VSCode打开`q01.html`, 你需要在绿色字体中间填入代码, 代码构成如下:

1. 已知拥有变量promise, promise是`Promise`类的实例, 要求当编写代码, 当`Promise`执行完毕时
   1. 如果成功, 则获取执行完毕返回的数据`data`, 并调用`dataRcv(data)`
   2. 如果失败, 则获取执行完毕返回的错误原因`reason`, 并调用`errored(reason)`
2. 提示: 使用`Promise`的`then`和`catch`方法可以分别处理成功和错误.

### 2.1 测试
保存后双击q01.html进行测试, 网页会显示本题正确与否.

## 3.0 第二题
请用VSCode打开`q02.html`, 你需要在绿色字体中间填入代码, 代码构成如下:

1. 你需要把q02编写为一个异步函数`async function`, 你可以将`q02Func`由`function`更改为`async function`(在`function`前增加`async`关键字, 推荐)或在q02Func中返回`Promise`对象.
2. Promise返回要求: 当`inputData === undefined`时, 请返回错误, 错误内容为字符串`'error!'`, 其他情况请返回成功, 成功的数据为`inputData + 1`.

### 3.1 测试
保存后双击q02.html进行测试, 网页会显示本题正确与否