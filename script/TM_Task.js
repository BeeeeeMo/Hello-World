const url = "https://navikingtm.autoking.com.tw/api/v3/GetPassV2";
const data = {"sourceid":"3","did":"AC923D46-1996-AC11-16F1-860903CF76AA"};
const headers = {
  'user-agent': 'NaviKingTM/1 CFNetwork/1220.1 Darwin/20.3.0',
  'content-type': 'application/json'};

const myRequest = {
  url: url,
  method: "POST",
  body: JSON.stringify(data),
  headers: headers,
};

$task.fetch(myRequest).then(response => {
    if (response.statusCode == 200){
      // $notify("導航王測速更新", "更新成功", response.body); // Success!
      var obj = JSON.parse(response.body);
      console.log(obj['output_data']['accessToken']);
      $prefs.setValueForKey(obj['output_data']['accessToken'], 'TM_TOKEN');
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
var yyyy = TimeNow.toLocaleDateString().slice(0,4)
var MM = (TimeNow.getMonth()+1<10 ? '0' : '')+(TimeNow.getMonth()+1);
var dd = (TimeNow.getDate()<10 ? '0' : '')+TimeNow.getDate();
let today = yyyy + "_" + MM + "_" + dd;
console.log(today);
const url2 = "https://download.localking.com.tw/cdnfiles/NaviKingUpdate/SpeedCameras/daily_camera_" + today + "_04.dat";
const updateRequest = {
    url: url2,
    headers: headers,
};

$task.fetch(updateRequest).then(response => {
    if (response.statusCode == 200){
        $notify("導航王測速更新", "更新成功", today);
        $prefs.setValueForKey(yyyy + MM + dd, 'NK_MAP_VERSION');
        $prefs.setValueForKey(url, 'NK_MAP_URL');
    } else {
        console.log('本日無更新');
    }
}, reason => {
    // reason.error
    $notify("導航王測速更新", "更新失敗", reason.error); // Error!
});
$done();
