import Canvas from "./canvas.mjs";

const canvas = new Canvas('canvas')

const simulation = new Worker('js/simulation.mjs')

simulation.onmessage = function(e) {
  if (e.data.type === 'draw') {
    const uintData = e.data.data
    const width = e.data.width
    const height = e.data.height
    canvas.drawBoard(uintData, width, height)
  }
  if (e.data.type === 'info') {
    console.log(e.data)
  }
}

const size = {
  x: 300,
  y: 300
}

canvas.resize(size.x, size.y)
canvas.clear()
simulation.postMessage({
  type: 'start',
  width: size.x,
  height: size.y,
  drawSpeed: 10000
})
