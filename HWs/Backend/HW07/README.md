Q1:

如何创建一个Interface(对象接口)，并声明访问为public的函数homework()，请写一段代码

------

Q2:

假设我们目前有两个Interface，一个名字为A一个为B

```
interface A {

}
interface B implements A {

}
```

请问B Interface有什么语法错误

------

Q3:

请问PSR-7中，RequestInterface继承了哪个Interface

------

Q4:

请判断以下操作是否正确

添加一个叫test的header

```
$app->get('/foo', function (Request $request, Response $response, array $args) {
    $payload = json_encode(['hello' => 'world'], JSON_PRETTY_PRINT);
    $response->getBody()->write($payload);
    return $response->withoutHeader('test');
});
```

请解释错在哪里？



------

Q5:请判断以下Middleware是在app运行之前还是在app运行之后执行

```
$app->add(function (Request $request, RequestHandlerInterface $handler): Response {
    $routeContext = RouteContext::fromRequest($request);
    $routingResults = $routeContext->getRoutingResults();
    $methods = $routingResults->getAllowedMethods();
    $requestHeaders = $request->getHeaderLine('Access-Control-Request-Headers');

    $response = $handler->handle($request);

    $response = $response->withHeader('Access-Control-Allow-Origin', '*');
    $response = $response->withHeader('Access-Control-Allow-Methods', implode(',', $methods));
    $response = $response->withHeader('Access-Control-Allow-Headers', $requestHeaders);

    // Optional: Allow Ajax CORS requests with Authorization header
    // $response = $response->withHeader('Access-Control-Allow-Credentials', 'true');

    return $response;
});


$app->addRoutingMiddleware();

// The routes
$app->get('/api/v0/users', function (Request $request, Response $response): Response {
    $response->getBody()->write('List all users');

    return $response;
});
```

------

Q6:以下我有个路由，路径是/book/xxx

如果我想获取到xxx参数，代码需要怎么写

请写出一段代码

------

Q7:

如果我想在Response Body输出一段文字

I am handsome

以下我创建了一个路由

```
$app->get('/api/v0/users', function (Request $request, Response $response): Response {
   

    return $response;
});

```

请补充get路由内的代码



------

Q8:我想获取Session值该如何操作

提示：getAttribute