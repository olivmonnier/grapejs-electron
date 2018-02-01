import { selectFile } from '../../utils/dialog'
import { readFileSync } from '../../utils/file'

const importHtmlInCanvas = (editor, filePath) => {
  if (filePath) {
    const htmlString = readFileSync(filePath)
  
    editor.setComponents(htmlString)
  }
}

export default function (editor, config = {}) {
  const { Commands } = editor

  Commands.add('importHtml', {
    run() {
      selectFile([
        { name: 'Html', extensions: ['html'] }
      ]).then(filePath => filePath && importHtmlInCanvas(editor, filePath[0]))
    }
  })
}