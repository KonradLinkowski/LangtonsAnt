export default class Canvas {
  constructor(selector) {
    this.canvas = null
    this.context = null
    this.zoom = 1
    this._mount(selector)
  }
  _mount(selector) {
    this.canvas = document.querySelector(selector)
    this.context = this.canvas.getContext('2d')
    this.canvas.addEventListener('wheel', this._onMouseWheel.bind(this), false)
  }
  _onMouseWheel(event) {
    if (['ctrlKey', 'altKey', 'shiftKey'].some(key => event[key])) {
      return
    }
    if (event.deltaY < 0) {
      this.zoom /= 2
    }
    if (event.deltaY > 0) {
      this.zoom *= 2
    }
    console.log(this.zoom)
  }
  clear() {
    this.context.fillStyle = '#ffffffff'
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
  }
  drawBoard(drawable, width, height) {
    const imageData = new ImageData(drawable, width, height)
    this.context.putImageData(imageData, 0, 0)
  }
  resize(width, height) {
    this.canvas.width = width
    this.canvas.height = height
  }
}
