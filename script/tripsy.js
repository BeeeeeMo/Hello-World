var body = $response.body;
var obj = JSON.parse($response.body)

obj['is_premium'] = true;
$done(JSON.stringify(obj));
