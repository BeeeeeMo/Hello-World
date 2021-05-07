const url = "https://navikingtm.autoking.com.tw/api/v3/GetPassV2";
const data = { "sourceid": "3", "did": "AC923D46-1996-AC11-16F1-860903CF76AA" };
const headers = {
    'user-agent': 'NaviKingTM/1 CFNetwork/1220.1 Darwin/20.3.0',
    'content-type': 'application/json'
};

const myRequest = {
    url: url,
    method: "POST",
    body: JSON.stringify(data),
    headers: headers,
};

$task.fetch(myRequest).then(response => {
    if (response.statusCode == 200) {
        // $notify("導航王測速更新", "更新成功", response.body); // Success!
        var obj = JSON.parse(response.body);
        console.log(obj['output_data']['accessToken']);
        var TM_TOKEN = $prefs.setValueForKey(obj['output_data']['accessToken'], 'TM_TOKEN');
        if (!TM_TOKEN){
            $notify("Token保存錯誤", "", "QQ");
        } else {
            $notify("Token保存成功", "", "QQ");
        }
        //   $done();
    }
    $notify("???", "statusCode", response.statusCode); // Success!
    // $done();
}, reason => {
    // reason.error
    $notify("Refresh Key Failed", "失敗", reason.error); // Error!
    // $done();
});

$task.fetch(myRequest).then(response => {
    if (response.statusCode == 200) {
        // $notify("導航王測速更新", "更新成功", response.body); // Success!
        var obj = JSON.parse(response.body);
        console.log(obj['output_data']['accessToken']);
        var TM_TOKEN = $prefs.setValueForKey(obj['output_data']['accessToken'], 'TM_TOKEN');
        if (!TM_TOKEN){
            $notify("Token保存錯誤", "", "QQ");
        } else {
            $notify("Token保存成功", "", "QQ");
        }
        //   $done();
    }
    $notify("???", "statusCode", response.statusCode); // Success!
    // $done();
}, reason => {
    // reason.error
    $notify("Refresh Key Failed", "失敗", reason.error); // Error!
    // $done();
});

var TimeNow = new Date();
var yyyy = TimeNow.toLocaleDateString().slice(0, 4)
var MM = (TimeNow.getMonth() + 1 < 10 ? '0' : '') + (TimeNow.getMonth() + 1);
var dd = (TimeNow.getDate() < 10 ? '0' : '') + TimeNow.getDate();
let today = yyyy + "_" + MM + "_" + dd;

const url2 = "https://download.localking.com.tw/cdnfiles/NaviKingUpdate/SpeedCameras/daily_camera_" + today + "_04.dat";
const updateRequest = {
    url: url2,
    headers: headers,
};

$task.fetch(updateRequest).then(response => {
    console.log(response.statusCode);
    if (response.statusCode == 200) {
        $notify("導航王測速更新", "更新成功", today);
        console.log("測速照相資料更新成功!")
        var NK_MAP_VERSION = $prefs.setValueForKey(yyyy + MM + dd, 'NK_MAP_VERSION');
        var NK_MAP_URL = $prefs.setValueForKey(url2, 'NK_MAP_URL');
        if (!NK_MAP_VERSION) {
            $notify("NK_MAP_VERSION 保存錯誤", "", "QQ");
        } else {
            $notify("NK_MAP_VERSION 保存成功", "", "QQ");
        }
        if (!NK_MAP_URL) {
            $notify("NK_MAP_URL 保存錯誤", "", "QQ");
        } else {
            $notify("NK_MAP_URL 保存成功", "", "QQ");
        }
    } else {
        console.log('本日無更新, 當前版本如下');
    }
}, reason => {
    // reason.error
    $notify("導航王測速更新", "更新失敗", reason.error); // Error!
});
console.log($prefs.valueForKey("NK_MAP_VERSION"));
console.log($prefs.valueForKey("NK_MAP_URL"));
console.log("Done!");
$done();
