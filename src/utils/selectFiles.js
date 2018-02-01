const { dialog } = require('electron').remote

export default function (filters = []) {
  return new Promise((resolve) => {
    dialog.showOpenDialog({ 
      properties: ['openFile', 'multiSelections'],
      filters
    }, resolve)
  })
}