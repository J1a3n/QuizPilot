const API_URL = 'https://script.google.com/macros/s/AKfycbzYpLy5gKCSiDTJbf8Lk5tbPxihqnvZvoxEcYVBy4P9EhK_CDr72HodjcmxLwEzUoPT/exec';

async function apiCall(action, data = {}) {
  const res = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({ action, ...data }),
  });
  return res.json();
}
