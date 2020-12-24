var body = $response.body;
var obj = JSON.parse($response.body)

obj['user']['premium'] = true;
$done(JSON.stringify(obj));