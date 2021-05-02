
var modifiedHeaders = $request.headers;
modifiedHeaders['Authorization'] = 'bearer ' + $prefs.valueForKey('TM_Token');
$done({headers : modifiedHeaders});
