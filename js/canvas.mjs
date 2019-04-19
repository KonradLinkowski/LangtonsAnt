export default class Canvas {
  constructor(selector) {
    this.canvas = null
    this.context = null
    this._mount(selector)
  }
  _mount(selector) {
    this.canvas = document.querySelector(selector)
    this.context = this.canvas.getContext('2d')
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
