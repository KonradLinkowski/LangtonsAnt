const utils = {
  UInt8ToHex: (uInt, alpha = true) => {
    return uInt.slice(0, alpha ? 4 : 3).reduce((p, c) => p + c.toString(16).padStart(2, '0'), '#')
  },
  hexToUInt: hex => {
    return hex.padEnd(9, 'f').slice(1).match(/.{2}/g).map(e => parseInt(e, 16)) 
  },
  getRGB: hex => {
    return hex.substr(0, 7)
  }
}
