class Ant {
  constructor(x = 0, y = 0, movesList = [
    { color: '#ffffff', direction: 1 },
    { color: '#000000', direction: -1 }
  ]) {
    this.x = x
    this.y = y
    this._directionIndex = 0
    this.movesList = movesList
    this._directionsList = [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: -1, y: 0 }
    ]
    this.direction = this._directionsList[this._directionIndex]
  }
  move(color) {
    const moveIndex = this.movesList.findIndex(move => utils.getRGB(move.color) === utils.getRGB(color))
    const move = this.movesList[moveIndex]
    this._directionIndex = this._nextDirection(move.direction)
    this.direction = this._directionsList[this._directionIndex]
    this.x += this.direction.x
    this.y += this.direction.y
    return this.movesList[this._nextColor(moveIndex)].color
  }
  _nextColor(index) {
    const newIndex = index + 1
    if (newIndex >= this.movesList.length) {
      return 0
    }
    if (newIndex < 0) {
      return this.moves.length - 1
    }
    return newIndex
  }
  _nextDirection(directionIndex) {
    const newIndex = this._directionIndex + directionIndex
    if (newIndex >= this._directionsList.length) {
      return 0
    }
    if (newIndex < 0) {
      return this._directionsList.length - 1
    }
    return newIndex
  }
}
