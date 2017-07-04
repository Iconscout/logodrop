var app = app || {};

app.performAction = (action, data) => {
  window.data = JSON.stringify(data);
  window.location.hash = action;
  window.location.hash = '#';
}

app.insertLogo = (logo) => {
	app.performAction('INSERT_LOGO', logo);
}