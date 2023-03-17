//http://localhost:5500/?repo=https://github.com/rickyMelida/react-bible-app
const url = window.location.href;
const urlGithub = document.getElementById('url-github');

urlGithub.setAttribute('href', url.split('=')[1]);


