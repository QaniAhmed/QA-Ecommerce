export function GetItem(key) {
  const item = localStorage.getItem(key);
  console.log(item);
  return JSON.parse(item);
}

export function SetItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
}
