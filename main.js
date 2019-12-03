const webPush = require('web-push');

const pushSubscriptions = [{
    "endpoint": "...",
    "expirationTime": null,
    "keys": {
        "p256dh": "...",
        "auth": "..."
    }
}];

const vapidPublicKey = '...';
const vapidPrivateKey = '...';

const payload = 'Here is a payload!';

const options = {
    TTL: 60,
    vapidDetails: {
        subject: 'mailto:you@yourmail.fr',
        publicKey: vapidPublicKey,
        privateKey: vapidPrivateKey
    }
};

pushSubscriptions.forEach(pushSubscription =>
    webPush.sendNotification(
        pushSubscription,
        payload,
        options
    )
);