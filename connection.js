const fetch = require('node-fetch');

const token = 'secret_Mmycly7YIU2xH3VzbNNQSay4ZUyeHi3eJzeIy1XLoNR';
const headers = {
'Authorization': `Bearer ${token}`,
'Content-Type': 'application/json',
};

const url = 'https://api.notion.com/v1/databases';

fetch(url, { headers })
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erro:', error));