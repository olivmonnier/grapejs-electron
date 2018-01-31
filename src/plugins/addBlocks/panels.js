export default function(editor, config = {}) {
  const { Panels } = editor

  Panels.addButton('options', {
    id: 'addBlocksButton',
    className: 'fa fa-list-alt',
    command: () => editor.runCommand('addBlocks'),
    attributes: {
      title: 'Add Blocks'
    }
  })
}