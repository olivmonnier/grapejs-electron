export default (editor, config = {}) => {
  const { TraitManager } = editor

  TraitManager.addType('content', {
    events: {
      'keyup': 'onChange'
    },

    getInputEl: function () {
      if (!this.inputEl) {
        const textarea = document.createElement('textarea')
        textarea.setAttribute('rows', 10)
        textarea.value = this.target.get('content')
        this.inputEl = textarea
      }

      return this.inputEl
    },

    onValueChange: function () {
      this.target.set('content', this.model.get('value'))
    }
  })
}