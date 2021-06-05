let obj = JSON.parse($response.body);
console.log(obj);
obj['data']['user']['premium'] = true;
obj['data']['user']['max_photos'] = 50;
obj['data']['user']['max_moments'] = 50;
obj['data']['user']['max_duration'] = 60;
obj['data']['user']['features']['import'] = "show";
obj['data']['user']['features']['edit'] = "show";
obj['data']['user']['features']['music'] = "show";
obj['data']['user']['features']['settings_premium_trigger'] = "hide";
obj['data']['user']['features']['memories_premium_trigger'] = "hide";
// body = JSON.stringify(obj);

$done({body: jSON.stringify(obj)});
