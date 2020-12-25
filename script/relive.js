var body = $response.body;
var obj = JSON.parse($response.body)

obj['user']['premium'] = true;
obj['user']['max_photos'] = 50;
obj['user']['max_moments'] = 50;
obj['user']['max_duration'] = 60;
obj['user']['features']['import'] = "show";
obj['user']['features']['edit'] = "show";
obj['user']['features']['music'] = "show";
obj['user']['features']['settings_premium_trigger'] = "hide";
obj['user']['features']['memories_premium_trigger'] = "hide";
$done(JSON.stringify(obj));