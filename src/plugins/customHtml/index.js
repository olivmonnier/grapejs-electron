import grapesjs from 'grapesjs'
import loadComponents from './components'
import loadBlocks from './blocks'
import loadTraits from './traits'


export default grapesjs.plugins.add('customHtmlPlugin', (editor, opts = {}) => {
  const defaultOpts = {
    // Defaults
    contentBlock: 'Add some HTMLElement'
  }
  const options = Object.assign({}, defaultOpts, opts)

  loadComponents(editor, options)
  loadBlocks(editor, options)
  loadTraits(editor, options)
})