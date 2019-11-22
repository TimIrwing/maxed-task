export default async function getJSON(url, options) {
  const response = await fetch(url, options);

  return response.json();
}
