import { clearTimeout } from "timers";

export default (editor, config = {}) => {
  const { TraitManager } = editor
  const codeViewer = editor.CodeManager.getViewer('CodeMirror').clone()
  codeViewer.set({
    codeName: 'htmlmixed',
    theme: 'hopscotch',
    readOnly: 0,
    lineNumbers: 1
  })

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
      const content = codeViewer.editor.getValue().trim()
      this.target.set('content', content)
    },

    render: function () {
      this.renderLabel();
      this.renderField();
      this.el.className = this.className;
      codeViewer.init(this.inputEl)
      codeViewer.setContent(this.target.get('content'))
      codeViewer.editor.on('change', () => this.onValueChange())
      const wait = setTimeout(() => {
        clearTimeout(wait)
        codeViewer.editor.refresh()
      }, 100)
      return this;
    }
  })
}