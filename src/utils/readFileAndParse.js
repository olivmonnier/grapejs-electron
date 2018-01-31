const fs = require('fs')

export default function(filePath) {
  const fileString = fs.readFileSync(filePath, 'utf8')

  return JSON.parse(fileString)
}