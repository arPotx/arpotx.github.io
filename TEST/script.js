// Funktion zum Wechseln zu Online-Panel
function goToOnlinePanel() {
  document.getElementById('mainPanel').style.display = 'none';
  document.getElementById('onlinePanel').style.display = 'block';
  document.getElementById('serverList').style.display = 'block';
  document.getElementById('joinWithCode').style.display = 'block';
  document.getElementById('createRoom').style.display = 'block';
  document.getElementById('RegisterPanel').style.display = 'block';
  document.getElementById('accountPanel').style.display = 'none';
}

// Funktion zum Zurückgehen zum Hauptpanel
function backToMainPanel() {
  document.getElementById('mainPanel').style.display = 'block';
  document.getElementById('onlinePanel').style.display = 'none';
  document.getElementById('serverList').style.display = 'none';
  document.getElementById('joinWithCode').style.display = 'none';
  document.getElementById('createRoom').style.display = 'none';
  document.getElementById('RegisterPanel').style.display = 'none';
  document.getElementById('accountPanel').style.display = 'none';
}

function RegisterPanel() {
  document.getElementById('mainPanel').style.display = 'none';
  document.getElementById('onlinePanel').style.display = 'none';
  document.getElementById('serverList').style.display = 'none';
  document.getElementById('joinWithCode').style.display = 'none';
  document.getElementById('createRoom').style.display = 'none';
  document.getElementById('RegisterPanel').style.display = 'block';
  document.getElementById('accountPanel').style.display = 'none';
}

// Event-Listener für den "Play Online"-Button hinzufügen
document.getElementById('playOnlineBtn').addEventListener('click', function() {
  goToOnlinePanel();
});

document.getElementById('registerButton').addEventListener('click', function() {
  RegisterPanel();
});
////////////////////////////////////////////////////////////////////////

document.getElementById('joinCodeInput').addEventListener('input', function() {
  this.value = this.value.replace(/\D/g, ''); // Entferne Nicht-Zahlen
});
