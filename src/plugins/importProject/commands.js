import { selectFile } from '../../utils/dialog'
import { readFileAndParse } from '../../utils/file'

const importProject = (editor, filePath) => {
  const { Commands } = editor
  const projectParsed = readFileAndParse(filePath)
  const { html, css, blocks } = projectParsed

  if (blocks) Commands.get('addBlocks').run(blocks)
  if (html) editor.setComponents(html)
  if (css) editor.setStyle(css)
}

export default function (editor, config = {}) {
  const { Commands } = editor

  Commands.add('importProject', {
    run() {
      selectFile([
        { name: 'JavaScript Object Notation', extensions: ['json'] }
      ]).then(filePath => filePath && importProject(editor, filePath[0]))
    }
  })
}