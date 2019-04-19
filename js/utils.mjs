export const UInt8ToHex = (uInt, alpha = true) => {
  return uInt.slice(0, alpha ? 4 : 3).reduce((p, c) => p + c.toString(16).padStart(2, '0'), '#')
}

export const hexToUInt = hex => {
  return hex.padEnd(9, 'f').slice(1).match(/.{2}/g).map(e => parseInt(e, 16)) 
}

export const getRGB = hex => {
  return hex.substr(0, 7)
}
