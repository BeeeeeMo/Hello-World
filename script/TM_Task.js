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
      // $prefs.setValueForKey(url, 'NK_MAP_URL');
      $notify("導航王測速更新", "更新成功", response.body); // Success!
      var obj = JSON.parse(response.body);
      console.log(obj['output_data']['accessToken']);
      $done();
    }
    $notify("???", "statusCode", response.statusCode); // Success!
    $done();
}, reason => {
    // reason.error
    $notify("Refresh Key Failed", "失敗", reason.error); // Error!
    $done();
});
