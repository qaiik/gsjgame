function dynamicSwitch(file) {
  fetch(file)
  .then(res => res.json())
  .then(data => {
    blb = new Blob([data['res']], {type:'text/html'})
    location.href = URL.createObjectURL(blb)
  })
}
  
