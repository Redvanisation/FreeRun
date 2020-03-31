export const saveToStorage = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
}