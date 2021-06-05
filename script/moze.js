// api.moze.app
// ^https://api\.moze\.app/iap/transaction-record/

obj = JSON.stringify({
	"success": true,
	"data": [{
		"id": "000000000000000",
		"date": "2020-11-16T00:00:00.000Z",
		"state": 3,
		"productId": "MOZE_IAP_ICONS_COLLECTION_01",
		"createdAt": "2020-11-16T00:00:00.000Z",
		"updatedAt": "2020-11-16T00:00:00.000Z"
	}, {
		"id": "000000000000000",
		"date": "2020-11-16T00:00:00.000Z",
		"state": 3,
		"productId": "MOZE_IAP_ICONS_COLLECTION_02",
		"createdAt": "2020-11-16T00:00:00.000Z",
		"updatedAt": "2020-11-16T00:00:00.000Z"
	}, {
		"id": "000000000000000",
		"date": "2020-11-16T00:00:00.000Z",
		"state": 3,
		"productId": "MOZE_IAP_ICONS_COLLECTION_03",
		"createdAt": "2020-11-16T00:00:00.000Z",
		"updatedAt": "2020-11-16T00:00:00.000Z"
	}, {
		"id": "000000000000000",
		"date": "2020-11-16T00:00:00.000Z",
		"state": 3,
		"productId": "MOZE_IAP_THEMES_MARBLE_01",
		"createdAt": "2020-11-16T00:00:00.000Z",
		"updatedAt": "2020-11-16T00:00:00.000Z"
	}, {
		"id": "000000000000000",
		"date": "2020-11-16T00:00:00.000Z",
		"state": 3,
		"productId": "MOZE_IAP_THEMES_WATERCOLOR_02",
		"createdAt": "2020-11-16T00:00:00.000Z",
		"updatedAt": "2020-11-16T00:00:00.000Z"
	}, {
		"id": "000000000000000",
		"date": "2020-11-16T00:00:00.000Z",
		"state": 3,
		"productId": "MOZE_IAP_THEMES_WATERCOLOR_01",
		"createdAt": "2020-11-16T00:00:00.000Z",
		"updatedAt": "2020-11-16T00:00:00.000Z"
	}, {
		"id": "000000000000000",
		"date": "2020-11-16T00:00:00.000Z",
		"state": 3,
		"productId": "MOZE_IAP_THEMES_SPACE_01",
		"createdAt": "2020-11-16T00:00:00.000Z",
		"updatedAt": "2020-11-16T00:00:00.000Z"
	}]
});

$done({body: obj});
