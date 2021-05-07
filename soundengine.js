class soundEngine {
  play(file) {
    this.s = new Audio(file);
    this.s.play()
  }
}

