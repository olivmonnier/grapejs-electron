import selectFiles from '../../utils/selectFiles'
import readFileAndParse from '../../utils/readFileAndParse'

function addBlock(editor, block) {
  const { BlockManager } = editor
  const { id, opts } = block

  if (id && opts) BlockManager.add(id, opts)
}

function addBlocksByFilePath(editor, filePath) {
  const blocksParsed = readFileAndParse(filePath)

  if (blocksParsed.hasOwnProperty('blocks')) {
    blocksParsed.blocks.forEach(block => addBlock(editor, block))
  }
}

export default function(editor, config = {}) {
  const { Commands } = editor

  Commands.add('importBlocks', {
    run: () => {
      selectFiles([
        { name: 'JSON', extensions: ['json'] }
      ]).then((pathFiles) => {
        if (pathFiles && Array.isArray(pathFiles)) {
          pathFiles.forEach(file => addBlocksByFilePath(editor, file))
        }
      })
    }
  })
}