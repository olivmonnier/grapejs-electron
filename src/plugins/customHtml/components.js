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
        if (el.dataset && el.dataset.type && el.dataset.type === 'custom') {
          return { type: 'custom' }
        }
      }
    }),
    view: view.extend({
      events: {
        'click': function() {
          editor.select(this.el)
        }
      },
      init() {
        this.listenTo(this.model, 'change:content', this.updateContent)
      },
      // updateContent() {
      //   const content = this.model.get('content')
      //   const comps = this.model.components()

      //   if (comps) {
      //     comps.add(content)
      //   }
      //   this.el.innerHTML = this.model.get('content')
      // }
    })
  })
}