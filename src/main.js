import grapesjs from 'grapesjs'
import './plugins'
import config from './config'
import Menu from './menu'

const editor = grapesjs.init(config)
const txtConfirm = 'Are you sure ?'

// editor.Panels.addPanel({
//   id: 'files',
//   visible: true,
//   buttons: [
//     {
//       id: 'importProjectButton',
//       className: 'fa fa-file-code-o',
//       command: () => editor.runCommand('importProject'),
//       attributes: {
//         title: 'Open Project'
//       }
//     },
//     {
//       id: 'exportProjectButton',
//       className: 'fa fa-floppy-o',
//       command: () => editor.runCommand('exportProject'),
//       attributes: {
//         title: 'Export Project'
//       }
//     },
//     {
//       id: 'importHtmlButton',
//       className: 'fa fa-html5',
//       command: () => editor.runCommand('importHtml'),
//       attributes: {
//         title: 'Import HTML'
//       }
//     },
//     {
//       id: 'importCssButton',
//       className: 'fa fa-css3',
//       command: () => editor.runCommand('importCss'),
//       attributes: {
//         title: 'Import Css'
//       }
//     },
//     {
//       id: 'importBlocksButton',
//       className: 'fa fa-list-alt',
//       command: () => editor.runCommand('importBlocks'),
//       attributes: {
//         title: 'Import Blocks'
//       }
//     },
//     {
//       id: 'importComponentsButton',
//       className: 'fa fa-cubes',
//       command: () => editor.runCommand('importComponents'),
//       attributes: {
//         title: 'Import Components'
//       }
//     }
//   ]
// })
// editor.Panels.addButton('options', [
//   {
//     id: 'undo',
//     className: 'fa fa-undo',
//     command: () => editor.runCommand('core:undo')
//   },
//   {
//     id: 'redo',
//     className: 'fa fa-repeat',
//     command: () => editor.runCommand('core:redo')
//   }, 
//   {
//     id: 'clear',
//     className: 'fa fa-trash',
//     command: () => confirm(txtConfirm) && editor.runCommand('core:canvas-clear')
//   }
// ])

Menu(editor)