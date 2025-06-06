import './styles.css';

const messagesDiv = document.getElementById('messages');

async function fetchMessages() {
    const response = await fetch('https://message-board-7495.onrender.com/message_board/messages');
    const messages = await response.json();
    messagesDiv.innerHTML = '';
    messages.forEach((msg, index) => {
        const div = document.createElement('div');
        div.className = 'message';
        div.innerHTML = '<span class="username">' + msg.username + ':</span> ' + msg.content +
            ' <button data-index="' + index + '">Delete</button>';
        messagesDiv.appendChild(div);
    });

    // Add event listeners to delete buttons
    document.querySelectorAll('button[data-index]').forEach(button => {
        button.addEventListener('click', async () => {
            const index = parseInt(button.getAttribute('data-index'));
            await fetch('https://message-board-7495.onrender.com/message_board/messages', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ index })
            });
            fetchMessages();
        });
    });
}

fetchMessages();