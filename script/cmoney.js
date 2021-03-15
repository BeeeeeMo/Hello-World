var body = $response.body;
var obj = JSON.parse(body)

if (obj["AuthType"] == 0) {
    $notify("Cmoney‼️", "", "Get!")
    body =  JSON.stringify({"ResponseCode":1,"ResponseMsg":"","AuthType":1,"AuthExpTime":"2099/11/16"});
};
$notify("Cmoney‼️", "", "123!")
$done(body);
