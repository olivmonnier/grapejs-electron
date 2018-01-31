import selectJsonFiles from '../../utils/selectJsonFiles'
import readFileAndParse from '../../utils/readFileAndParse'

function addBlock(editor, block) {
  const { BlockManager } = editor
  const { id, opts } = block

  if (id && opts) BlockManager.add(id, opts)
}

function addBlocksByFilePath(editor, filePath) {
  if (!filePath) return

  const blocksParsed = readFileAndParse(filePath)

  if (blocksParsed.hasOwnProperty('blocks')) {
    blocksParsed.blocks.forEach(block => addBlock(editor, block))
  } else {
    addBlock(editor, blocksParsed)
  }
}

export default function(editor, config = {}) {
  const { Commands } = editor

  Commands.add('addBlocks', {
    run: () => {
      selectJsonFiles().then((pathFiles) => {
        if (pathFiles && Array.isArray(pathFiles)) {
          pathFiles.forEach(file => addBlocksByFilePath(editor, file))
        }
      })
    }
  })
}