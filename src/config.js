export default {
  container: '#gjs',
  fromElement: true,
  height: '100%',
  plugins: ['customHtmlPlugin', 'exportProjectPlugin', 'importBlocksPlugin', 'importComponentsPlugin', 'importCssPlugin', 'importHtmlPlugin', 'importProjectPlugin'],
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
      }
    ]
  }
}
