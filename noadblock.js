function adsBlocked() {
  fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js')
  .then(res => res.text())
  .then(data => value = data)
  return value == '\n'
}
