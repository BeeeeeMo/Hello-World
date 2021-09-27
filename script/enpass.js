var body = $response.body;
var obj = JSON.parse(body);

obj["license"] = "premium"
$done(JSON.stringify(obj));
