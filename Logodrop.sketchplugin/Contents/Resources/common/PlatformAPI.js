var app = app || {};

app.performAction = (action, data) => {
  window.data = JSON.stringify(data);
  window.location.hash = action;
  window.location.hash = '#';
}

app.insertLogo = (logo) => {
	app.performAction('INSERT_LOGO', logo);
}

app.showError = (error) => {
	console.log(error);
	alert("Error while fetching response from Internet. Please try again!");
}