let obj = JSON.parse($response.body);
let url = $request.url;

if (url.endsWith("Subscription") && $request.method == "POST") {
    obj = {
        "output_data": {
            "accessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjSWQiOjY2MTU4OTEsInVJZCI6bnVsbCwic0lkIjozNzg1LCJkSWQiOiIxQkVFODA5Ni0yQ0RBLTRBQzQtQjFEQS03NjhGQjQwRDMwRDgiLCJsZWdhbElNU0kiOm51bGwsImxvZ1R5cGUiOjIyLCJpYXQiOjE2MTcyNjcyNDUsImV4cCI6MTYxNzI3MDg0NX0.plBpkNjzjn9xectAOBvnRQQCeYYqsPRn3y6faWJpxgk",
            "refreshToken": "c0d19db9-17s2-4d4f-10c7-2d562251060c",
            "subscriptionInfo": {
                "orderId": "220000917692980",
                "startTimeMillis": 1617235200000,
                "expiryTimeMillis": 4098470400000,
                "autoRenewing": false,
                "OSType": 2
            }
        },
        "output_code": 1
    };
    $done(JSON.stringify(obj));
} else if (url.endsWith("Subscription") && $request.method == "GET") {
    obj = {
        "output_data": {
            "orderId": "220000917692980",
            "startTimeMillis": 1617235200000,
            "expiryTimeMillis": 1619855838000,
            "autoRenewing": false,
            "OSType": 2
        },
        "output_code": 1
    };
    $done(JSON.stringify(obj));
} else if (url.endsWith("ClientUpdate") && $request.method == "POST"){
    $notify("導航王測速更新", "更新失敗, 抓取離線結果")	
    obj = {
        "output_data": {
            "ClientUpdate": [{
                "NaviKingUpdate": []
            }],
            "CheckNewCPInfo": 0,
            "CameraDailyUpdate": {
                "url": $prefs.valueForKey("NK_MAP_URL"),
                "fileType": 0,
                "version": parseInt($prefs.valueForKey("NK_MAP_VERSION") + "04")
            }
        },
        "output_code": 1
    };
};
$done(JSON.stringify(obj));
