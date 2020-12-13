// https://navikingtm\.autoking\.com\.tw/api/v2/Subscription

var body = $response.body;
var obj = JSON.parse(body);

if (obj['output_code'] == -4153 || obj['output_code'] == -4151 || obj['output_code'] == -3105){
    body = JSON.stringify({
        "output_data": {
            "accessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjSWQiOjYwMzA4NTgsInVJZCI6bnVsbCwic0lkIjozNzg1LCJkSWQiOiI0QUY2N0Y3MS05NTdBLTQyM0ItODcyRC0xQzY5MEU3NUNGNDciLCJsZWdhbElNU0kiOm51bGwsImxvZ1R5cGUiOjIyLCJpYXQiOjE2MDY0OTYyMjMsImV4cCI6NDA5ODQ4MjE2MH0._ZjX8MFkQpS52feNBiGXmj-7zhSpP0W_GHmUb7D_Rbs",
            "refreshToken": "1eadac75-459d-4972-92b4-4f1078e0ad78",
            "subscriptionInfo": {
                "orderId": "000000000000000",
                "startTimeMillis": 1605076887000,
                "expiryTimeMillis": 4098482160000,
                "autoRenewing": true,
                "OSType": 2
            }
        },
        "output_code": 1
    });
} else if (obj['output_code'] == -3103){
    body = JSON.stringify({
        "output_data": {
            "orderId": "000000000000000",
            "startTimeMillis": 1605076887000,
            "expiryTimeMillis": 4098482160000,
            "autoRenewing": true,
            "OSType": 2
        },
        "output_code": 1
    });
}

$done(body);
