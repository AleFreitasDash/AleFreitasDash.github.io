// notifications.js
export function loadNotifications(userId, containerId) {
    const notificationsRef = firebase.database().ref('avisos/' + userId);
    notificationsRef.once('value').then((snapshot) => {
        const data = snapshot.val();
        const notificationsContainer = document.getElementById(containerId);
        if (notificationsContainer) {
            notificationsContainer.innerHTML = ''; // Limpar notificações atuais
            if (data) {
                Object.keys(data).forEach(key => {
                    const notification = data[key];
                    const notificationElement = document.createElement('li');
                    notificationElement.innerHTML = `
                        <div class="timeline-panel">
                            <div class="media-body">
                                <h6 class="mb-1">${notification.title}</h6>
                                <small class="d-block">${notification.content}</small>
                            </div>
                        </div>
                    `;
                    notificationsContainer.appendChild(notificationElement);
                });
            }
        }
    });
}
