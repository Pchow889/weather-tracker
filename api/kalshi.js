export default async function handler(req, res) {
  const url = req.query.url;
  if (!url || (!url.startsWith('https://api.elections.kalshi.com') && !url.startsWith('https://api.openweathermap.org'))) {
    return res.status(400).json({ error: 'Invalid URL' });
  }
  const response = await fetch(url, { headers: { 'Accept': 'application/json' } });
  const data = await response.json();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(response.status).json(data);
}
