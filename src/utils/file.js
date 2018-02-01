const fs = require('fs')

export function readFileSync(filePath) {
  return fs.readFileSync(filePath, 'utf8')
}

export function readFileAndParse(filePath) {
  const fileString = readFileSync(filePath)

  return JSON.parse(fileString)
}