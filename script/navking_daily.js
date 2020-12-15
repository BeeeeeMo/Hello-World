let today = new Date().toJSON().slice(0,10).replace(/-/g,'_');

const url = "https://download.localking.com.tw/cdnfiles/NaviKingUpdate/SpeedCameras/daily_camera_" + today + "_04.dat";
const myRequest = {
    url: url
};

$task.fetch(myRequest).then(response => {
    if (response.statusCode == 200){
        // $notify("導航王測速更新", "更新成功", response.body); // Success!
        $prefs.setValueForKey(new Date().toJSON().slice(0,10).replace(/-/g,''), 'NK_MAP_VERSION'+"04");
        $prefs.setValueForKey(url, 'NK_MAP_URL');
        $done();
    } else {
        $done();
    }
    $done();
}, reason => {
    // reason.error
    $notify("導航王測速更新", "更新失敗", reason.error); // Error!
    $done();
});