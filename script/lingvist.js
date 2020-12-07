// QX: ^https://payment-api\.lingvist\.com/1\.4/user/services.+

var obj = JSON.parse($response.body);
obj = {
	"services": [{
		"service": "unlimited",
		"is_infinite": true,
		"active_since_ts": "2020-12-07T16:35:48.738672Z",
		"payment_provider": "apple-in-app",
		"product_name": "unlimited-lifetime",
		"title": "Lingvist \u7121\u9650\u7248\uff0c\u55ae\u5e74\u4ed8\u8cbb",
		"subscription": {
			"is_recurring": true,
			"uuid": "00000000-0000-0000-0000-000000000000",
			"group_name": "unlimited",
			"status": "trial",
			"price": {
				"amount": "2490.000000",
				"currency": "TWD"
			}
		},
		"unlimited_bundle": {},
		"is_active": true
	}],
	"has_historical_services": false,
	"latest_historical_service_paid": false
};
$done({body: JSON.stringify(obj)});
