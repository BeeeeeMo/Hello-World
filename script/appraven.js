var body = $response.body;
var obj = JSON.parse(body)

obj["premium"] = true;

$done((JSON.stringify(obj));
