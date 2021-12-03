var modifiedHeaders = $request.headers;
modifiedHeaders['Cookie'] = 'over18=1';
$done({headers : modifiedHeaders});
