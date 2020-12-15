let today = new Date().toJSON().slice(0,10).replace(/-/g,'_');

const url = "https://download.localking.com.tw/cdnfiles/NaviKingUpdate/SpeedCameras/daily_camera_" + today + "_04.dat";
const myRequest = {
    url: url
};

if ($prefs.valueForKey("NK_MAP_VERSION") == new Date().toJSON().slice(0,10).replace(/-/g,'')){
    body = JSON.stringify({
        "output_data": {
            "ClientUpdate": [{
                "NaviKingUpdate": []
            }],
            "CheckNewCPInfo": 0,
            "CameraDailyUpdate": {
                "url": $prefs.valueForKey("NK_MAP_URL"),
                "fileType": 0,
                "version": $prefs.valueForKey("NK_MAP_VERSION")
            }
        },
        "output_code": 1
    });
    $done(body);
}else{
    $task.fetch(myRequest).then(response => {
        if (response.statusCode == 200){
            body = JSON.stringify({
                "output_data": {
                    "ClientUpdate": [{
                        "NaviKingUpdate": []
                    }],
                    "CheckNewCPInfo": 0,
                    "CameraDailyUpdate": {
                        "url": url,
                        "fileType": 0,
                        "version": new Date().toJSON().slice(0,10).replace(/-/g,'')
                    }
                },
                "output_code": 1
            });
            $done(body);
        } else {
            body = JSON.stringify({
                "output_data": {
                    "ClientUpdate": [{
                        "NaviKingUpdate": []
                    }],
                    "CheckNewCPInfo": 0,
                    "CameraDailyUpdate": {
                        "url": $prefs.valueForKey("NK_MAP_URL"),
                        "fileType": 0,
                        "version": $prefs.valueForKey("NK_MAP_VERSION")
                    }
                },
                "output_code": 1
            });
            $done(body);
        }
        $done();
    }, reason => {
        // reason.error
        $notify("導航王測速更新", "更新失敗, 抓取離線結果", reason.error); // Error!
        body = JSON.stringify({
            "output_data": {
                "ClientUpdate": [{
                    "NaviKingUpdate": []
                }],
                "CheckNewCPInfo": 0,
                "CameraDailyUpdate": {
                    "url": $prefs.valueForKey("NK_MAP_URL"),
                    "fileType": 0,
                    "version": $prefs.valueForKey("NK_MAP_VERSION")
                }
            },
            "output_code": 1
        });
        $done(body);
    });
}

