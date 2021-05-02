
var modifiedHeaders = $request.headers;
modifiedHeaders['Authorization'] = 'bearer ' + $prefs.valueForKey('TM_TOKEN');
$done({headers : modifiedHeaders});
