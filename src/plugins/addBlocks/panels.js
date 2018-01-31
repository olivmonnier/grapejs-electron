export default function(editor, config = {}) {
  const { Panels } = editor

  Panels.addPanel({
    id: 'files',
    visible: true,
    buttons: [
      {
        id: 'addBlocksButton',
        className: 'fa fa-list-alt',
        command: () => editor.runCommand('addBlocks'),
        attributes: {
          title: 'Add Blocks'
        }
      }
    ]
  })
}