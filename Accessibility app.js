const notificationArea = document.getElementbyId('notificationArea')

const notificationButton = document.getElementById('notificationButton')

notificationButton.addEventListener('click', function() {
notificationArea.textContent = "New email!"
})
