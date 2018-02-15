import grapesjs from 'grapesjs'
import loadCommand from './command'

export default grapesjs.plugins.add('editHtmlPlugin', (editor, opts = {}) => {
  const defaultOpts = {
    // Defaults
  }
  const options = Object.assign({}, defaultOpts, opts)

  loadCommand(editor, options)
})