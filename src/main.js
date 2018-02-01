import grapesjs from 'grapesjs'
import './plugins/exportProject'
import './plugins/importBlocks'
import './plugins/importHtml'
import config from './config'
const editor = grapesjs.init(config)

editor.Panels.addPanel({
  id: 'files',
  visible: true,
  buttons: [
    {
      id: 'importHtmlButton',
      className: 'fa fa-html5',
      command: () => editor.runCommand('importHtml'),
      attributes: {
        title: 'Import HTML'
      }
    },
    {
      id: 'importBlocksButton',
      className: 'fa fa-list-alt',
      command: () => editor.runCommand('importBlocks'),
      attributes: {
        title: 'Import Blocks'
      }
    }, 
    {
      id: 'exportProjectButton',
      className: 'fa fa-floppy-o',
      command: () => editor.runCommand('exportProject'),
      attributes: {
        title: 'Export Project'
      }
    }
  ]
})
