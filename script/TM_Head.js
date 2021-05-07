
var modifiedHeaders = $request.headers;
let url = $request.url;
if (!url.endsWith("GetPassV2")){
    modifiedHeaders['Authorization'] = 'bearer ' + $prefs.valueForKey('TM_TOKEN');
}
$done({headers : modifiedHeaders});
