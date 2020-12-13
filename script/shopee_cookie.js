

if ($request.headers['Cookie']) {
    var headerSP = $request.headers['Cookie'];
    var cookie = $prefs.setValueForKey(headerSP, "CookieSP");
    if (!cookie){
      $notify("蝦皮 Cookie 保存錯誤‼️", "", "請重新登入")
    } else {
      $notify("蝦皮 Cookie 保存成功🎉", "", "")
    }
  } else {
    $notify("蝦皮 Cookie 保存失敗‼️", "", "請重新登入")
  }
  $done({})
