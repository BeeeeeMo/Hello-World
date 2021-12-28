let obj = JSON.parse($response.body);
let url=$request.url;

if(url.endsWith("offerings")||url.endsWith("products")) {
	$done({});
} else {
    // MOZE 3.0
    obj["subscriber"]["subscriptions"]= {
        "MOZE_PRO_SUBSCRIPTION_MONTHLY_BASIC": {
            "billing_issues_detected_at": null,
            "expires_date": "2099-11-16T11:16:00Z",
            "grace_period_expires_date": null,
            "is_sandbox": false,
            "original_purchase_date": "2020-11-16T00:00:00Z",
            "period_type": "normal",
            "purchase_date": "2020-11-16T00:00:00Z",
            "store": "app_store",
            "unsubscribe_detected_at": "2099-12-06T17:52:25Z"
        },
          "com.RuinScenery.noad": {
            "billing_issues_detected_at": null,
            "expires_date": "20-01-27T21:19:34Z",
            "grace_period_expires_date": null,
            "is_sandbox": false,
            "original_purchase_date": "2021-12-27T21:19:35Z",
            "ownership_type": "PURCHASED",
            "period_type": "trial",
            "purchase_date": "2021-12-27T21:19:34Z",
            "store": "app_store",
            "unsubscribe_detected_at": "2021-12-27T21:23:00Z"
        }
    };
    // PhotoSync 
    obj["subscriber"]["other_purchases"]= {
        "com.touchbyte.PhotoSync.PremiumLifetime": {
            "purchase_date": "2020-11-16T11:16:00Z"
        },
        "MOZE_IAP_ICONS_TW_01": {
            "purchase_date": "2020-07-05T18:13:31Z"
        }// },
        // "MOZE_IAP_ICONS_TW_02": {
        //     "purchase_date": "2020-07-05T18:16:42Z"
        // },
        // "MOZE_IAP_ICONS_TW_04": {
        //     "purchase_date": "2020-07-06T16:43:36Z"
        // },
        // "MOZE_IAP_ICONS_TW_06": {
        //     "purchase_date": "2020-07-06T16:44:04Z"
        // }
        
    };
    obj["subscriber"]["non_subscriptions"]= {
        "com.touchbyte.PhotoSync.PremiumLifetime": [{
            "id": "",
            "is_sandbox": false,
            "original_purchase_date": "2020-11-15T09:56:03Z",
            "purchase_date": "2020-11-15T09:56:03Z",
            "store": "app_store"
        }],
        "MOZE_IAP_ICONS_TW_02": [{
            "id": "40ee5655af",
            "is_sandbox": false,
            "original_purchase_date": "2020-07-05T18:13:31Z",
            "purchase_date": "2020-07-05T18:13:31Z",
            "store": "app_store"
        }],
        "com.onmyway133.PastePal.pro": [{
            "id": "f8ce974e35",
            "is_sandbox": false,
            "original_purchase_date": "2020-11-15T09:56:03Z",
            "purchase_date": "2020-11-11T11:16:00Z",
            "store": "app_store"
        }]
        // "MOZE_IAP_ICONS_TW_02": [{
        //     "id": "9f474181d7",
        //     "is_sandbox": false,
        //     "original_purchase_date": "2020-07-05T18:16:42Z",
        //     "purchase_date": "2020-07-05T18:16:42Z",
        //     "store": "app_store"
        // }],
        // "MOZE_IAP_ICONS_TW_04": [{
        //     "id": "20c8552756",
        //     "is_sandbox": false,
        //     "original_purchase_date": "2020-07-06T16:43:36Z",
        //     "purchase_date": "2020-07-06T16:43:36Z",
        //     "store": "app_store"
        // }],
        // "MOZE_IAP_ICONS_TW_06": [{
        //     "id": "b0dc464b3d",
        //     "is_sandbox": false,
        //     "original_purchase_date": "2020-07-06T16:44:04Z",
        //     "purchase_date": "2020-07-06T16:44:04Z",
        //     "store": "app_store"
        // }]
    };
	
	
    obj["subscriber"]["entitlements"]= {
        "premium": {
            "expires_date": null,
            "grace_period_expires_date": null,
            "product_identifier": "com.touchbyte.PhotoSync.PremiumLifetime",
            "purchase_date": "2020-11-16T11:16:00Z"
        },
        "pro": {
            "expires_date": null,
            "grace_period_expires_date": null,
            "product_identifier": "com.onmyway133.PastePal.pro",
            "purchase_date": "2020-11-11T11:16:00Z"
        }
    };
    $done(JSON.stringify(obj));
};

