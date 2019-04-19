import Board from "./board.mjs";
import Ant from "./ant.mjs";
import Canvas from "./canvas.mjs";

const movesList = [
  { color: '#ffffff', direction: 1 },
  { color: '#ff0000', direction: -1 },
  { color: '#0000ff', direction: 1 },
  { color: '#00ff00', direction: -1 },
  { color: '#ffff00', direction: 1 },
  { color: '#ff00ff', direction: 1 },
  { color: '#00ffff', direction: 1 },
  { color: '#000000', direction: -1 }
]

const size = 100
const board = new Board(size, size)
const ant = new Ant(size / 2, size / 2, movesList)
const canvas = new Canvas('canvas')

window.addEventListener('resize', e => {
  canvas.resize(100, 100)
})

canvas.clear()
const calculate = () => {
  for (let i = 0; i < 100; i++) {
    const pos = { x: ant.x, y: ant.y }
    const pixel = board.get(pos.x, pos.y)
    const newColor = ant.move(pixel)
    board.set(pos.x, pos.y, newColor)
  }
  setTimeout(calculate, 0)
}

calculate()
setInterval(() => {
  const uintData = board.getDrawable()
  canvas.drawBoard(uintData, board.width, board.height)
}, 100)
