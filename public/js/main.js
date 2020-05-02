const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const inputMessage = document.getElementById('msg');
const usersList = document.getElementById('users');

const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

const socket = io();

// Join Chatroom
socket.emit('joinRoom', { username, room });

// Get room and users
socket.on('roomUsers', ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
});

// Message from Server
socket.on('message', (message) => {
  outputMessage(message);

  // Scroll down;
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get message text
  const msg = inputMessage.value;

  socket.emit('chatMessage', msg);

  // Clear Input
  inputMessage.value = '';
  inputMessage.focus();
});

function outputMessage(message) {
  const { username, text, time } = message;

  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `
  <p class="meta">${username} <span>${time}</span></p>
  <p class="text">${text}</p>
  `;
  chatMessages.appendChild(div);
}

function outputRoomName(room) {
  document.getElementById('room-name').innerHTML = room;
}

function outputUsers(users) {
  usersList.innerHTML = `
    ${users.map((user) => `<li>${user.username}</li>`).join('')}
  `;
}
