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
              'data-tooltip': 'Open Project',
              'data-tooltip-pos': 'bottom'
            }
          },
          {
            id: 'exportProjectButton',
            className: 'fa fa-floppy-o',
            command: () => editor.runCommand('exportProject'),
            attributes: {
              'data-tooltip': 'Export Project',
              'data-tooltip-pos': 'bottom'
            }
          },
          {
            id: 'importHtmlButton',
            className: 'fa fa-html5',
            command: () => editor.runCommand('importHtml'),
            attributes: {
              'data-tooltip': 'Import HTML',
              'data-tooltip-pos': 'bottom'
            }
          },
          {
            id: 'importCssButton',
            className: 'fa fa-css3',
            command: () => editor.runCommand('importCss'),
            attributes: {
              'data-tooltip': 'Import Css',
              'data-tooltip-pos': 'bottom'
            }
          },
          {
            id: 'importBlocksButton',
            className: 'fa fa-list-alt',
            command: () => editor.runCommand('importBlocks'),
            attributes: {
              'data-tooltip': 'Import Blocks',
              'data-tooltip-pos': 'bottom'
            }
          },
          {
            id: 'importComponentsButton',
            className: 'fa fa-cubes',
            command: () => editor.runCommand('importComponents'),
            attributes: {
              'data-tooltip': 'Import Components',
              'data-tooltip-pos': 'bottom'
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
            attributes: { 
              'data-tooltip': 'Edit document',
              'data-tooltip-pos': 'bottom'
            }
          },
          {
            id: 'undo',
            className: 'fa fa-undo',
            command: () => editor.runCommand('core:undo'),
            attributes: {
              'data-tooltip': 'Undo',
              'data-tooltip-pos': 'bottom'
            }
          },
          {
            id: 'redo',
            className: 'fa fa-repeat',
            command: () => editor.runCommand('core:redo'),
            attributes: {
              'data-tooltip': 'Redo',
              'data-tooltip-pos': 'bottom'
            }
          },
          {
            id: 'clear',
            className: 'fa fa-trash',
            command: () => confirm('Are you sure to clean the canvas?') && editor.runCommand('core:canvas-clear'),
            attributes: {
              'data-tooltip': 'Clear',
              'data-tooltip-pos': 'bottom'
            }
          },
          {
            active: true,
            id: 'sw-visibility',
            className: 'fa fa-square-o',
            command: 'sw-visibility',
            context: 'sw-visibility',
            attributes: { 
              'data-tooltip': 'View components',
              'data-tooltip-pos': 'bottom'
            }
          },
          {
            id: 'preview',
            className: 'fa fa-eye',
            command: 'preview',
            context: 'preview',
            attributes: { 
              'data-tooltip': 'Preview',
              'data-tooltip-pos': 'bottom'
            }
          },
          {
            id: 'fullscreen',
            className: 'fa fa-arrows-alt',
            command: 'fullscreen',
            context: 'fullscreen',
            attributes: { 
              'data-tooltip': 'Fullscreen',
              'data-tooltip-pos': 'bottom' 
            }
          },
          {
            id: 'export-template',
            className: 'fa fa-code',
            command: 'export-template',
            attributes: {
              'data-tooltip': 'View code',
              'data-tooltip-pos': 'bottom' 
            }
          }
        ]
      }
    ]
  }
}
