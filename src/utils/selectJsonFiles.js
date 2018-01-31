const { dialog } = require('electron').remote

export default function() {
  return new Promise((resolve) => {
    dialog.showOpenDialog({ 
      properties: ['openFile', 'multiSelections'],
      filters: [
        { name: 'JSON', extensions: ['json'] }
      ]
    }, resolve)
  })
}