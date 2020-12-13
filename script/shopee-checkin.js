/**
 * @fileoverview Example to compose HTTP request
 * and handle the response.
 *
 */

 const myRequest = {
    url: 'https://shopee.tw/mkt/coins/api/v2/checkin',
    method: "POST", // Optional, default GET.
    headers: {
        Cookie: $prefs.valueForKey("CookieSP")
    }, // Optional.
};

$task.fetch(myRequest).then(response => {
    let obj = JSON.parse(response.body);
    if (obj["data"]["success"]) {
        var user = obj["data"]["username"];
        var coins = obj["data"]["increase_coins"];
        var checkinday = obj["data"]["check_in_day"];
        $notify("蝦皮 " + user + " 已連續簽到 " + checkinday + " 天", "", "今日已領取 " + coins + "💰💰💰");
        $done();
    }

    // // response.statusCode, response.headers, response.body
    // console.log(response.body);
    // $notify("Title", "Subtitle", response.body); // Success!
    // $done();
}, reason => {
    // reason.error
    $notify("Title", "Subtitle", reason.error); // Error!
    $done();
});