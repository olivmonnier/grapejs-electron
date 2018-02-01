import { selectFiles } from '../../utils/dialog'
import { readFileAndParse } from '../../utils/file'

function addBlock(editor, block) {
  const { BlockManager } = editor
  const { id, opts } = block

  if (id && opts) BlockManager.add(id, opts)
}

function addBlocks(editor, blocks) {
  blocks.forEach(block => addBlock(editor, block))
}

function addBlocksByFilePath(editor, filePath) {
  if (filePath) {
    const blocksParsed = readFileAndParse(filePath)
    const { blocks } = blocksParsed
  
    if (blocks) {
      addBlocks(editor, blocks)
    }
  }
}

export default function (editor, config = {}) {
  const { Commands } = editor

  Commands.add('addBlock', {
    run(block) {
      addBlock(editor, block)
    }
  })

  Commands.add('addBlocks', {
    run(blocks) {
      addBlocks(editor, blocks)
    }
  })

  Commands.add('importBlocks', {
    run() {
      selectFiles([
        { name: 'JSON', extensions: ['json'] }
      ]).then((filesPath) => filesPath && filesPath
        .forEach(file => addBlocksByFilePath(editor, file)))
    }
  })
}