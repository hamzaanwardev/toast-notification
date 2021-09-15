const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
];
button.addEventListener('click', () => createNotifications ());

function createNotifications (message = null, type = null) {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notify.classList.add(type ? type : ''info);
    notif.innerText = message ? message : getRandomMessages();
    toasts.appendChild(notif)

    setTimeout ( () => {
        notif.remove()
    }, 3000)
}
function getRandomMessages () {
    return messages[Math.floor (Math.random()) * messages.length ]
};