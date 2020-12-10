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
        }
    };
    // PhotoSync 
    obj["subscriber"]["other_purchases"]= {
        "com.touchbyte.PhotoSync.PremiumLifetime": {
            "purchase_date": "2020-11-16T11:16:00Z"
        }
    };
    obj["subscriber"]["non_subscriptions"]= {
        "com.touchbyte.PhotoSync.PremiumLifetime": [{
            "id": "",
            "is_sandbox": false,
            "original_purchase_date": "2020-11-15T09:56:03Z",
            "purchase_date": "2020-11-15T09:56:03Z",
            "store": "app_store"
        }],
        "MOZE_IAP_ICONS_COLLECTION_01": [{
            "id": "40ee5655af",
            "is_sandbox": false,
            "original_purchase_date": "2020-07-05T18:13:31Z",
            "purchase_date": "2020-07-05T18:13:31Z",
            "store": "app_store"
        }],
        "MOZE_IAP_ICONS_COLLECTION_02": [{
            "id": "40ee5655af",
            "is_sandbox": false,
            "original_purchase_date": "2020-07-05T18:13:31Z",
            "purchase_date": "2020-07-05T18:13:31Z",
            "store": "app_store"
        }],
        "MOZE_IAP_ICONS_COLLECTION_03": [{
            "id": "40ee5655af",
            "is_sandbox": false,
            "original_purchase_date": "2020-07-05T18:13:31Z",
            "purchase_date": "2020-07-05T18:13:31Z",
            "store": "app_store"
        }],
        "MOZE_IAP_THEMES_MARBLE_01": [{
            "id": "40ee5655af",
            "is_sandbox": false,
            "original_purchase_date": "2020-07-05T18:13:31Z",
            "purchase_date": "2020-07-05T18:13:31Z",
            "store": "app_store"
        }]
    };
    obj["subscriber"]["entitlements"]= {
        "premium": {
            "expires_date": null,
            "grace_period_expires_date": null,
            "product_identifier": "com.touchbyte.PhotoSync.PremiumLifetime",
            "purchase_date": "2020-11-16T11:16:00Z"
        }
    };
    $done(JSON.stringify(obj));
};

