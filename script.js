// Check if the browser supports notifications
if ('Notification' in window) {
    // Request permission to send notifications
    Notification.requestPermission().then(function (permission) {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
        } else {
            console.log('Notification permission denied.');
        }
    });
} else {
    console.log('This browser does not support notifications.');
}

// Send a notification function
function sendNotification() {
    if (Notification.permission === 'granted') {
        const notification = new Notification('Workout Reminder', {
            body: 'Don’t forget to work out today!',
        });

        // Log when notification is shown
        notification.onshow = function () {
            console.log('Notification is shown.');
        };

        // Handle notification click event
        notification.onclick = function () {
            window.focus();
        };

        // Log notification close event
        notification.onclose = function () {
            console.log('Notification was closed.');
        };
    } else {
        console.log('Notifications are not enabled or permission is denied.');
    }
}

// Add event listener to button
document.getElementById('notify-button').addEventListener('click', function () {
    if (Notification.permission === 'granted') {
        // Send notification after a 5-second delay (adjust as needed)
        setTimeout(sendNotification, 5000);
        alert('You’ll get a workout reminder in a few seconds!');
    } else {
        alert('Please enable notifications to get reminders!');
    }
});
