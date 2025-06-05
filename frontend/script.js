import './styles.css';

const messagesDiv = document.getElementById('messages');
const form = document.getElementById('form');
const usernameInput = document.getElementById('username');
const contentInput = document.getElementById('content');

async function fetchMessages() {
    const response = await fetch('/message_board/messages');
    const messages = await response.json();
    messagesDiv.innerHTML = '';
    messages.forEach(msg => {
        const div = document.createElement('div');
        div.className = 'message';
        div.innerHTML = '<span class="username">' + msg.username + ':</span> ' + msg.content;
        messagesDiv.appendChild(div);
    });
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const content = contentInput.value.trim();
    if (!username || !content) return;
    await fetch('/message_board/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, content })
    });
    usernameInput.value = '';
    contentInput.value = '';
    fetchMessages();
});

// Initial load
fetchMessages();
