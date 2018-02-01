import { selectFiles } from '../../utils/dialog'
import { readFileAndParse } from '../../utils/file'

function addBlock(editor, block) {
  const { BlockManager } = editor
  const { id, opts } = block

  if (id && opts) BlockManager.add(id, opts)
}

function addBlocksByFilePath(editor, filePath) {
  if (filePath) {
    const blocksParsed = readFileAndParse(filePath)
  
    if (blocksParsed.hasOwnProperty('blocks')) {
      blocksParsed.blocks.forEach(block => addBlock(editor, block))
    }
  }
}

export default function (editor, config = {}) {
  const { Commands } = editor

  Commands.add('importBlocks', {
    run() {
      selectFiles([
        { name: 'JSON', extensions: ['json'] }
      ]).then((filesPath) => filesPath && filesPath
        .forEach(file => addBlocksByFilePath(editor, file)))
    }
  })
}