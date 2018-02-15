export default {
  container: '#gjs',
  fromElement: true,
  height: '100%',
  plugins: ['customHtmlPlugin', 'editHtmlPlugin','exportProjectPlugin', 'importBlocksPlugin', 'importComponentsPlugin', 'importCssPlugin', 'importHtmlPlugin', 'importProjectPlugin'],
  layerManager: {
    appendTo: '#layers-container'
  },
  panels: {
    defaults: [
      {
        id: 'panelLeft',
        el: '.column.left',
        resizable: {
          tc: 0,
          cr: 1,
          bc: 0,
          keyWidth: 'flex-basis',
          keyHeight: null
        }
      },
      {
        id: 'panelRight',
        el: '.column.right',
        resizable: {
          tc: 0,
          cr: 0,
          cl: 1,
          bc: 0,
          keyWidth: 'flex-basis',
          keyHeight: null
        }
      },
      {
        id: 'views',
        el: '#buttons-view',
        buttons: [
          {
            id: 'open-style-manager',
            className: 'fa fa-paint-brush',
            command: 'open-sm',
            active: true,
            attributes: { title: 'Open Style Manager' }
          },
          {
            id: 'open-traits-manager',
            className: 'fa fa-cog',
            command: 'open-tm',
            attributes: { title: 'Settings' }
          },
          {
            id: 'open-blocks-manager',
            className: 'fa fa-th-large',
            command: 'open-blocks',
            attributes: { title: 'Open Blocks' }
          }
        ]
      },
      {
        id: 'views-container',
        el: '#views-container'
      },
      {
        id: 'files',
        el: '#file-actions-container',
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
          },
          {
            id: 'importComponentsButton',
            className: 'fa fa-cubes',
            command: () => editor.runCommand('importComponents'),
            attributes: {
              title: 'Import Components'
            }
          }
        ]
      },
      {
        id: 'devices-c',
        el: '#devices-container'
      },
      {
        id: 'options',
        el: '#options-container',
        buttons: [
          {
            id: 'edit-html',
            className: 'fa fa-pencil-square-o',
            command: () => editor.runCommand('edit-html'),
            attributes: { title: 'Edit document' }
          },
          {
            id: 'undo',
            className: 'fa fa-undo',
            command: () => editor.runCommand('core:undo')
          },
          {
            id: 'redo',
            className: 'fa fa-repeat',
            command: () => editor.runCommand('core:redo')
          },
          {
            id: 'clear',
            className: 'fa fa-trash',
            command: () => confirm('Are you sure to clean the canvas?') && editor.runCommand('core:canvas-clear')
          },
          {
            active: true,
            id: 'sw-visibility',
            className: 'fa fa-square-o',
            command: 'sw-visibility',
            context: 'sw-visibility',
            attributes: { title: 'View components' }
          },
          {
            id: 'preview',
            className: 'fa fa-eye',
            command: 'preview',
            context: 'preview',
            attributes: { title: 'Preview' }
          },
          {
            id: 'fullscreen',
            className: 'fa fa-arrows-alt',
            command: 'fullscreen',
            context: 'fullscreen',
            attributes: { title: 'Fullscreen' }
          },
          {
            id: 'export-template',
            className: 'fa fa-code',
            command: 'export-template',
            attributes: { title: 'View code' }
          }
        ]
      }
    ]
  }
}
