// api.hello.ef.com
// https://api\.hello\.ef\.com/graphql

var body = $response.body;
var obj = JSON.parse($response.body)
const get = (p, o) =>
    p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o)
    
if (get(['data', 'viewer', 'me'], obj)){
    obj['data']['viewer']['me']['premium'] = {
        "isEnabled": true,
        "planType": "PlusTeacher",
        "__typename": "Premium"
    }
    console.log(obj);
    $done(obj);
} else {
    console.log('pass');
    $done(body);
};

