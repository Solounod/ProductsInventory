import axios from 'axios';

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
};


const csrfToken = getCookie('csrftoken');

const apiRegister = axios.create({
    baseURL: "http://localhost:8000/api/auth/signup/"
});

const apiLogin = axios.create({
  baseURL: "http://localhost:8000/api/auth/login/"
});


export const postRegisterUser = (signup) => apiRegister.post("/", signup, {
    headers: {
      'X-CSRFToken': csrfToken,
      'Content-Type': 'application/json',
    },
  } );

  export const postLoginUser = (login) => apiLogin.post("/", login, {
    headers: {
      'X-CSRFToken': csrfToken,
      'Content-Type': 'application/json',
    },
  } );