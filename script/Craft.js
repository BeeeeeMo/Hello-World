//MitM: api.craft.do
//Regex: ^https://api\.craft\.do/auth/v2/profile

var obj = JSON.parse($response.body);

obj["subscription"] = {
  "tier": "BusinessFree",
  "subscriptionActive": true,
  "expirationDate": 4098510960000,
  "subscriptionType": "yearly",
  "rawSubscriptionType": "AppStore",
  "productId": "com.lukilabs.lukiapp.pro.sub.yearly"
}

$done({body: JSON.stringify(obj)});
