document.getElementById('connect-button').addEventListener('click', function() {
    document.getElementById('status').textContent = 'Connecting to phone...';
    // Simulate connection
    setTimeout(() => {
        document.getElementById('status').textContent = 'Connected!';
        document.getElementById('controls').style.display = 'block';
    }, 2000); // Simulate 2-second delay for connection
});

document.getElementById('send-message-button').addEventListener('click', function() {
    alert('Send message functionality coming soon!');
});

document.getElementById('open-app-button').addEventListener('click', function() {
    alert('Open app functionality coming soon!');
});

document.getElementById('control-media-button').addEventListener('click', function() {
    alert('Control media functionality coming soon!');
});
