var obj = JSON.parse($response.body);
console.log($request.scheme)
console.log($request.method)
console.log($request.url)
console.log($request.path)
console.log($request.headers)
console.log($response.statusCode)
console.log($response.headers)
$done({body: JSON.stringify(obj)});
