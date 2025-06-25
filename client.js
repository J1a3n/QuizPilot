// client.js

// Replace with your deployed Apps Script Web App URL
const API_URL = 'https://script.google.com/macros/s/AKfycbzYpLy5gKCSiDTJbf8Lk5tbPxihqnvZvoxEcYVBy4P9EhK_CDr72HodjcmxLwEzUoPT/exec';

/**
 * Makes an API call to the backend.
 * Uses Content-Type text/plain to avoid preflight CORS on Apps Script.
 */
async function apiCall(action, data = {}) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8'  // bypasses CORS preflight :contentReference[oaicite:1]{index=1}
    },
    redirect: 'follow',  // ensures redirect handling is correct :contentReference[oaicite:2]{index=2}
    body: JSON.stringify({ action, ...data }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error('API error:', res.status, text);
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}
