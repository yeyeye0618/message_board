import './styles.css';

const messagesDiv = document.getElementById('messages');

async function fetchMessages() {
    const response = await fetch('http://127.0.0.1:5000/messages');
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
            await fetch('http://127.0.0.1:5000/messages', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ index })
            });
            fetchMessages();
        });
    });
}

if (
    location.hostname !== "localhost" &&
    location.hostname !== "127.0.0.1"
){
    alert("not allow");
    location.href = "/index.html";
}
else{
    fetchMessages();
}
