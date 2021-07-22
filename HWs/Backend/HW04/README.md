<h1>第四节课作业</h1>

这是某用户系统注册用户返回值， 请在`index.php`中 将它实体化为类或json文本，填入符合类型的值, 并实现两者互相转换

|键值|类型|可选|注释|
|-|-|-|-|
|uid|int|-|新注册的用户的uid|
|username|string|-|新注册的用户的用户名|
|email|?string|YES|新注册的用户邮箱(如果注册时提供了)|
|phone|?string|YES|新注册的手机号(如果注册时提供了), E164格式|
|phoneVerificationSentMethod|int|NO|手机验证码发送方式(如果注册时提供了), 如果没有提供, 值为NOT_SENT|
