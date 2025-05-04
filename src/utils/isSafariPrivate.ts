export const isSafariPrivate = () => {
  try {
    localStorage.setItem('test', 'test');
    localStorage.removeItem('test');
    return false;
  } catch {
    return true;
  }
};
