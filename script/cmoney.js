var body = $response.body;
var obj = JSON.parse($response.body)
var isVIP = obj["AuthType"]

if (isVIP == 0) {
      $done({body:JSON.stringify({"ResponseCode":1,"ResponseMsg":"","AuthType":1,"AuthExpTime":"2099/11/16"})});
};
$done(body);
