// js/app.js - simple helpers for auth & navigation
const API_LOGIN = '/api/login'; // change to your backend
const TOKEN_KEY = 'tugas_token';

async function doLogin(username, password){
  // example POST - adjust based on your backend
  const res = await fetch(API_LOGIN, {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({ username, password })
  });
  if(!res.ok) throw new Error('Gagal terhubung ke server');
  return res.json();
}

function requireAuthOrRedirect(){
  // simple token check (demo)
  const token = localStorage.getItem(TOKEN_KEY);
  if(!token){
    // allow index.html and other public assets
    if(!location.pathname.endsWith('index.html') && !location.pathname.endsWith('/')){
      location.href = 'index.html';
      return false;
    }
  }
  return true;
}

function logout(){
  localStorage.removeItem(TOKEN_KEY);
  location.href = 'index.html';
}
