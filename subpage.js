function popitup(url) {
  newwindow=window.open(url, 'name', 'height=2000, width=2500');
  if (window.focus) {newwindow.focus()}
  return false;
}
