document.addEventListener('DOMContentLoaded', () => {
    const transcriptDiv = document.getElementById('transcript');
    const transcriptId = 'TICKET_ID'; // Remplace TICKET_ID par l'ID du ticket

    fetch(`/transcripts/${transcriptId}.json`)
        .then(response => response.json())
        .then(data => {
            data.messages.forEach(msg => {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message');

                const avatar = document.createElement('img');
                avatar.src = msg.avatarURL;
                avatar.alt = msg.author;

                const messageContent = document.createElement('div');
                messageContent.classList.add('message-content');

                const author = document.createElement('strong');
                author.innerText = msg.author;
                messageContent.appendChild(author);

                const messageText = document.createElement('p');
                messageText.innerText = msg.content;
                messageContent.appendChild(messageText);

                messageDiv.appendChild(avatar);
                messageDiv.appendChild(messageContent);

                transcriptDiv.appendChild(messageDiv);
            });
        })
        .catch(error => {
            console.error('Erreur lors du chargement de la transcription:', error);
            transcriptDiv.innerText = 'Erreur lors du chargement de la transcription.';
        });
});