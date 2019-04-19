import { hexToUInt } from './utils.mjs'
export default class Board {
  constructor(width, height, defaultColor = '#ffffffff') {
    this.width = width
    this.height = height
    this.grid = new Array(height).fill(0).map(_ => new Array(width).fill(defaultColor))
  }
  get(x, y) {
    return this.grid[y][x]
  }
  set(x, y, color) {
    this.grid[y][x] = color
    return this
  }
  getDrawable() {
    const array = this.grid.map(row => {
      const rows = row.map(column => {
        const color = hexToUInt(column)
        return color
      })
      return rows
    }).flat(2)
    return new Uint8ClampedArray(array)
  }
}
