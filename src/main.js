import grapesjs from 'grapesjs'
import './plugins'
import config from './config'

const editor = grapesjs.init(config)

editor.Panels.addPanel({
  id: 'files',
  visible: true,
  buttons: [
    {
      id: 'importProjectButton',
      className: 'fa fa-file-code-o',
      command: () => editor.runCommand('importProject'),
      attributes: {
        title: 'Open Project'
      }
    },
    {
      id: 'exportProjectButton',
      className: 'fa fa-floppy-o',
      command: () => editor.runCommand('exportProject'),
      attributes: {
        title: 'Export Project'
      }
    },
    {
      id: 'importHtmlButton',
      className: 'fa fa-html5',
      command: () => editor.runCommand('importHtml'),
      attributes: {
        title: 'Import HTML'
      }
    },
    {
      id: 'importCssButton',
      className: 'fa fa-css3',
      command: () => editor.runCommand('importCss'),
      attributes: {
        title: 'Import Css'
      }
    },
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
