import grapesjs from 'grapesjs'
import loadCommands from './commands'
import loadPanels from './panels'

export default grapesjs.plugins.add('importBlocksPlugin', (editor, opts = {}) => {
  const defaultOpts = {
    // Defaults
  }
  const options = Object.assign({}, defaultOpts, opts)

  loadCommands(editor, options)
  loadPanels(editor, options)
})