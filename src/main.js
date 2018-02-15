import grapesjs from 'grapesjs'
import './plugins'
import config from './config'
import Menu from './menu'

const editor = grapesjs.init(config)

Menu(editor)