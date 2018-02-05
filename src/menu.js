const { remote, shell } = require('electron')
const { Menu, MenuItem } = remote

export default function (editor) {
  const menu = new Menu()

  menu.append(new MenuItem({
    label: 'File',
    submenu: [
      {
        label: 'Open Project',
        click() { editor.runCommand('importProject') }
      },
      {
        label: 'Export Project',
        click() { editor.runCommand('exportProject') }
      },
      {
        type: 'separator'
      },
      {
        label: 'Import HTML',
        click() { editor.runCommand('importHtml') }
      },
      {
        label: 'Import CSS',
        click() { editor.runCommand('importCss') }
      },
      {
        label: 'Import Blocks',
        click() { editor.runCommand('importBlocks') }
      },
      {
        label: 'Import Components',
        click() { editor.runCommand('importComponents') }
      }
    ]
  }))
  menu.append(new MenuItem({
    label: 'Edit',
    submenu: [
      {
        label: 'Undo',
        click() { editor.runCommand('core:undo') }
      },
      {
        label: 'Redo',
        click() { editor.runCommand('core:redo') }
      },
      {
        label: 'Clear',
        click() { confirm(txtConfirm) && editor.runCommand('core:canvas-clear') }
      },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' }
    ]
  }))
  menu.append(new MenuItem({
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'toggledevtools' },
      { type: 'separator' },
      { 
        label: 'Preview',
        click() { editor.runCommand('preview') }
      },
      { role: 'togglefullscreen' }
    ]
  }))
  menu.append(new MenuItem({
    role: 'window',
    submenu: [
      { role: 'minimize' },
      { role: 'close' }
    ]
  }))
  menu.append(new MenuItem({
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click() { shell.openExternal('http://grapesjs.com/') }
      }
    ]
  }))

  Menu.setApplicationMenu(menu)
}