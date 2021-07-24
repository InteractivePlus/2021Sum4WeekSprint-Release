参考答案:

A1：

```
interface A {
public function homework();
}
```

A2:

interface B应该用extends，而不是implements

A3:

MessageInterface

A4:

错误

withoutHeader是删除test Header，不是添加

A5:

之后



A6:

```
$app->get('/book/{xxx}', function ($request, $response, array $args) {
	echo $args['xxx']
    // Show book identified by $args['id']
});
```

A7:

```
$response->getBody()->write('I am handsome');
```

A8:

```
$app->get('/test', function (Request $request, Response $response) {
    // Get the session from the request
    $session = $request->getAttribute('session');
    
    $response->getBody()->write('Yay, ' . $session['name']);
    
    return $response;
});
```

