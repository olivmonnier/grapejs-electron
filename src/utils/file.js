const fs = require('fs')

export function readFileSync(filePath) {
  return fs.readFileSync(filePath, 'utf8')
}

export function readFileAndParse(filePath) {
  const fileString = readFileSync(filePath)

  return JSON.parse(fileString)
}

export function writeFileSync(filePath, content) {
  const contentString = JSON.stringify(content)

  return fs.writeFileSync(filePath, contentString)
}