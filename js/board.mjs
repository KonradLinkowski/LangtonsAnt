class Board {
  constructor(width, height, defaultColor = '#ffffffff') {
    this.width = width
    this.height = height
    this.grid = new Array(height).fill(0).map(_ => new Array(width).fill(defaultColor))
  }
  calcInBoundaries(x, y) {
    let newX = x % this.width
    if (newX < 0) {
      newX += this.width
    }
    let newY = y % this.height
    if (newY < 0) {
      newY += this.height
    }
    return { x: newX, y: newY }
  }
  get(x, y) {
    const { x: newX, y: newY } = this.calcInBoundaries(x, y)
    return this.grid[newY][newX]
  }
  set(x, y, color) {
    const { x: newX, y: newY } = this.calcInBoundaries(x, y)
    this.grid[newY][newX] = color
    return this
  }
  getDrawable() {
    const array = this.grid.map(row => {
      const rows = row.map(column => {
        const color = utils.hexToUInt(column)
        return color
      })
      return rows
    }).flat(2)
    return new Uint8ClampedArray(array)
  }
}
