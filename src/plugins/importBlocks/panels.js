export default function(editor, config = {}) {
  const { Panels } = editor

  Panels.addPanel({
    id: 'files',
    visible: true,
    buttons: [
      {
        id: 'importBlocksButton',
        className: 'fa fa-list-alt',
        command: () => editor.runCommand('importBlocks'),
        attributes: {
          title: 'Import Blocks'
        }
      }
    ]
  })
}