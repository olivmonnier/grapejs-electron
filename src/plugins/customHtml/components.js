export default (editor, config = {}) => {
  const { DomComponents } = editor
  const defaultType = DomComponents.getType('default')
  const { model, view } = defaultType

  DomComponents.addType('custom', {
    model: model.extend({
      defaults: Object.assign({}, model.prototype.defaults, {
        'custom-name': 'Custom HTML',
        droppable: true,
        draggable: true,
        traits: [
          {
            type: 'content',
            name: 'content',
            label: 'HTML'
          }
        ]
      })
    }, {
      isComponent(el) {
        if (el.dataset.type && el.dataset.type === 'custom') {
          return { type: 'custom' }
        }
      }
    }),
    view: view.extend({
      init() {
        this.listenTo(this.model, 'change:content', this.updateContent)
      },
      updateContent() {
        this.el.innerHTML = this.model.get('content')
      }
    })
  })
}