import grapesjs from 'grapesjs'
import loadCommands from './commands'
import loadComponents from './components'
import loadBlocks from './blocks'



export default grapesjs.plugins.add('customHtmlPlugin', (editor, opts = {}) => {
  const defaultOpts = {
    // Defaults
  }
  const options = Object.assign({}, defaultOpts, opts)

  loadCommands(editor, options)
  loadComponents(editor, options)
  loadBlocks(editor, options)
})