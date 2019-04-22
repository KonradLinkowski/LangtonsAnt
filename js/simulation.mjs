importScripts('utils.mjs', 'board.mjs', 'ant.mjs')

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

const calculate = (ant, board) => {
  const pos = { x: ant.x, y: ant.y }
  const pixel = board.get(pos.x, pos.y)
  const newColor = ant.move(pixel)
  board.set(pos.x, pos.y, newColor)
}

const start = (width, height, speed) => {
  const board = new Board(width, height)
  const ant = new Ant(width / 2, height / 2, movesList)
  var i = 0
  for (;;) {
    calculate(ant, board)
    if (i % speed === 0) {
      postMessage({
        type: 'draw',
        data: board.getDrawable(),
        width: board.width,
        height: board.height
      })
    }
    i += 1
  }
}

onmessage = function({ data }) {
  if (data.type === 'start') {
    start(data.width, data.height, data.drawSpeed)
  }
}
