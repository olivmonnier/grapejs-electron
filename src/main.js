import grapesjs from 'grapesjs'
import './plugins'
import config from './config'
import Menu from './menu'

const editor = grapesjs.init(config)

// On component change show the Style Manager
editor.on('component:selected', () => {
  const pn = editor.Panels;

  if (editor.getSelected()) {
    const openSmBtn = pn.getButton('views', 'open-style-manager')
    openSmBtn && openSmBtn.set('active', 1)
  }
});

Menu(editor)