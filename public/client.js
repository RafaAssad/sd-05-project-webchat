// Client side

// To be able to manipulate the DOM corresponding to our rendered front end
// Reference: https://github.com/tryber/sd-04-live-lectures/pull/67/files 
window.onload = () => {
  const clientSocketIo = window.io('http://localhost:3000');

  // clientSocketIo.on('myNickname', (name) => {
  //   const divUsers = document.getElementById('users')
  //   const li = document.createElement('li')
  //     li.setAttribute('data-name', 'user-online')
  //   li.textContent = name;

  //   divUsers.append(li)
  // });

  // clientSocketIo.on('newUser', (username) => {
  //   const divUsers = document.getElementById('users')
  //   const li = document.createElement('li')
  //     li.setAttribute('data-name', 'user-online')
  //   li.textContent = username;

  //   divUsers.append(li)
  // });

  // clientSocketIo.on('message', (message) => {
  //   const allMessages = document.getElementById('messages')
  //   console.log(allMessages)
  //   const p = document.createElement('p');
  //     p.textContent = message;

  //   allMessages.appendChild(p)
  // });

  // document.getElementById('send').addEventListener('click', () => {
  //   const message = document.getElementById('message').value;
  //   const name = document.querySelectorAll('li[data-name="user-online"]')[0].innerText;
  //   clientSocketIo.emit('message', { name, message });
  // });

}
