var TimeNow = new Date();
var yyyy = TimeNow.toLocaleDateString().slice(0, 4)
var MM = (TimeNow.getMonth() + 1 < 10 ? '0' : '') + (TimeNow.getMonth() + 1);
var dd = (TimeNow.getDate() < 10 ? '0' : '') + TimeNow.getDate();
let today = yyyy + "_" + MM + "_" + dd;

const headers = {
    'Host': 'navikingtm.autoking.com.tw',
    'user-agent': 'NaviKingTM/2 CFNetwork/1237 Darwin/20.4.0',
    'content-type': 'application/json'
};
const data = { "sourceid": "3", "did": "AC923D46-1996-AC11-16F1-860903CF76AA" };
const token_url = "https://navikingtm.autoking.com.tw/api/v3/GetPassV2";
const tokenRequest = {
    url: token_url,
    method: "POST",
    body: JSON.stringify(data),
    headers: headers,
};

$task.fetch(tokenRequest).then(response => {
    // response.statusCode, response.headers, response.body
    if (response.statusCode == 200) {
        var obj = JSON.parse(response.body);
        var TM_TOKEN = $prefs.setValueForKey(obj['output_data']['accessToken'], 'TM_TOKEN');
        if (!TM_TOKEN) {
            $notify("Token保存錯誤", "", "QQ");
        } else {
            // $notify("Token保存成功", "", "QQ");
            console.log('Token:' + obj['output_data']['accessToken']);
        }
    $done();
    } else {
        $notify("取得 Token 失敗", "Error Http Code", response.statusCode);
    }
}, reason => {
    // reason.error
    $notify("取得 Token 失敗", "reason.error", reason.error); // Error!
    $done();
});
    //  ===== 以上已完成=====

const headers2 = {
    'user-agent': 'NaviKingTM/2 CFNetwork/1237 Darwin/20.4.0',
};
const cam_url = "https://download.localking.com.tw/cdnfiles/NaviKingUpdate/SpeedCameras/daily_camera_" + today + "_04.dat";
const camUpdate = {
    url: cam_url,
    headers: headers2,
};

$task.fetch(camUpdate).then(response => {
    if (response.statusCode == 200) {
        // $notify("導航王測速更新", "更新成功", today);
        $prefs.setValueForKey(yyyy+MM+dd, 'NK_MAP_VERSION');
        $prefs.setValueForKey(cam_url, 'NK_MAP_URL');
        // $done();
    } else {
        // $done();
        $notify("導航王測速更新", "更新失敗 HTTP", response.statusCode);
    }
    $done();
}, reason => {
    // reason.error
    $notify("導航王測速更新", "更新失敗", reason.error); // Error!
    $done();
});

console.log("導航王測速更新", "更新成功", today);
console.log($prefs.valueForKey("NK_MAP_VERSION"));
console.log($prefs.valueForKey("NK_MAP_URL"));
$done();
