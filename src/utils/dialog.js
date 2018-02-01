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

const dialogSaveFile = (filters, defaultPath = './') => {
  return new Promise((resolve) => {
    dialog.showSaveDialog({
      defaultPath,
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

export function saveFile(filters = []) {
  return dialogSaveFile(filters)
}