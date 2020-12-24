var obj = JSON.parse($response.body);
obj = {
	"metaResponse": {
		"code": 0
	},
	"response": {
		"class": "UserModuleBillingResponse",
		"bbuid": "QssuVafTah",
		"usedIntroOfferPeriod": false,
		"modules": [{
			"class": "BillingModuleResponse",
			"name": "com.brainbow.module.peak.PeakModule",
			"subscription": {
				"bbuid": "QssuVafTah",
				"endTime": 253398326400000,
				"startTime": 1605484800000,
				"pro": true,
				"status": 0,
				"statusdate": 0,
				"source": {
					"cancelable": false,
					"id": "com.brainbow.peak.arsub_1wtrial_12m3499",
					"provider": "itunes",
					"type": "trial"
				}
			},
			"class": "BillingModuleResponse"
		}],
		"is_in_billing_retry": false,
		"class": "UserModuleBillingResponse"
	}
};
$done({body: JSON.stringify(obj)});
