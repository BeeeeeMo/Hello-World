var modifiedHeaders = $request.headers;
modifiedHeaders['cookie'] = 'over18=1';
$done({headers : modifiedHeaders});
