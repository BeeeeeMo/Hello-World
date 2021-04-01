var body = $response.body;
var obj = JSON.parse($response.body)

obj['premium'] = true;
obj['a'] = true;

$done(JSON.stringify(obj));
