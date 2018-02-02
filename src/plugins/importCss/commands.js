import { selectFile } from '../../utils/dialog'
import { readFileSync } from '../../utils/file'

const importCssInCanvas = (editor, filePath) => {
  if (filePath) {
    const cssString = readFileSync(filePath)

    editor.setStyle(cssString)
  }
}

export default function (editor, config = {}) {
  const { Commands } = editor

  Commands.add('importCss', {
    run() {
      selectFile([
        { name: 'Cascading Style Sheets', extensions: ['css'] }
      ]).then(filePath => filePath && importCssInCanvas(editor, filePath[0]))
    }
  })
}