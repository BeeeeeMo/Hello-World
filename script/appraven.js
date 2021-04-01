var body = $response.body;
var obj = JSON.parse($response.body)

obj['premium'] = true;
$done(JSON.stringify(obj));
