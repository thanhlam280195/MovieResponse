export const getItemLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
