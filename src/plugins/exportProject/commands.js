import { saveFile } from '../../utils/dialog'
import { writeFileSync } from '../../utils/file'

const formatBlock = (block) => {
  const { id, attributes } = block
  const { label, content, category } = attributes

  return {
    id,
    opts: {
      label,
      content,
      category: category.id,
      attributes: attributes.attributes
    }
  }
}

export default function (editor, config = {}) {
  const { Commands } = editor

  Commands.add('exportProject', {
    run() {
      let blocks = editor.BlockManager.getAll()
      const html = editor.getHtml()
      const css = editor.getCss()

      blocks = blocks.models.map(formatBlock)

      saveFile([
        { name: 'JavaScript Object Notation', extensions: ['json'] }
      ]).then(filePath => filePath && writeFileSync(filePath, {
        html, css, blocks
      }))
    }
  })
}