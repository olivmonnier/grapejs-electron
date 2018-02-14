export default function (editor, config = {}) {
  const { DomComponents } = editor
  const defaultType = editor.DomComponents.getType('default')
  const initToolbar = defaultType.model.prototype.initToolbar

  DomComponents.addType('html-code', {
    model: defaultType.model.extend({
      initToolbar(args) {
        initToolbar.apply(this, args)

        const toolbar = this.get('toolbar')
        toolbar.push({
          attributes: { 'class': 'fa fa-code' },
          command: 'open-html-code-editor'
        })
        this.set('toolbar', toolbar)
      }
    }, {
      isComponent(el) {
        if (typeof el.hasAttribute == 'function' && el.hasAttribute('data-html-code')) {
          return { type: 'html-code' }
        }
      }
    }),
    view: defaultType.view
  })
}