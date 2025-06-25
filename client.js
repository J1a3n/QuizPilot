// client.js

const API_URL = 'https://script.google.com/macros/s/AKfycbzl8l3TFPiTKQLhcAY-R2N3ylRgKroq6xm8BIzposvokc85yMz-1KVEA3k3tlpL3A2A/exec';

/**
 * Generic API caller using GET parameters (avoids CORS preflight).
 * @param {string} action - The action name (e.g., 'login', 'getNextQuestion').
 * @param {object} data - Key/value data to include as query params.
 */
async function apiCall(action, data = {}) {
  const params = new URLSearchParams({ action, ...data });
  const res = await fetch(`${API_URL}?${params.toString()}`, {
    method: 'GET',
    redirect: 'follow'
  });
  if (!res.ok) {
    const text = await res.text();
    console.error('API error:', res.status, text);
    throw new Error(`API error: ${res.status}`);
  }
  return res.json();
}
