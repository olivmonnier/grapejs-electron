import grapesjs from 'grapesjs'
import loadCommands from './commands'

export default grapesjs.plugins.add('importCssPlugin', (editor, opts = {}) => {
  const defaultOpts = {
    // Defaults
  }

  const options = Object.assign({}, defaultOpts, opts)

  loadCommands(editor, options)
})