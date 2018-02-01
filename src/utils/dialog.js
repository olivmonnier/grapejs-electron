const { dialog } = require('electron').remote

const dialogShowFile = (filters, isMultiple = true) => {
  const properties = ['openFile']

  if (isMultiple) properties.push('multiSelections')

  return new Promise((resolve) => {
    dialog.showOpenDialog({
      properties,
      filters
    }, resolve)
  })
}

export function selectFile(filters = []) {
  return dialogShowFile(filters, false)
}

export function selectFiles(filters = []) {
  return dialogShowFile(filters)
}
