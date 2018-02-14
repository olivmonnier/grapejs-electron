export default function (editor, config = {}) {
  const { Commands } = editor

  Commands.add('open-html-code-editor', {
    run(editor, sender, data) {
      const component = editor.getSelected()

      const codeViewer = editor.CodeManager.getViewer('CodeMirror').clone()
      codeViewer.set({
        codeName: 'htmlmixed',
        theme: 'hopscotch',
        readOnly: false
      })

      const modalContent = document.createElement('div')

      const editorTextArea = document.createElement('textarea')

      const saveButton = document.createElement('button')
      saveButton.innerHTML = 'Save'
      saveButton.className = 'gjs-btn-prim'
      saveButton.style = 'margin-top: 8px'
      saveButton.onclick = () => {
        component.set('content', '')
        component.components(codeViewer.editor.getValue())
        editor.Modal.close()
      }

      modalContent.appendChild(editorTextArea)
      modalContent.appendChild(saveButton)

      codeViewer.init(editorTextArea)

      let htmlContent = document.createElement('div')
      htmlContent.innerHTML = component.toHTML()
      htmlContent = htmlContent.firstChild.innerHTML
      codeViewer.setContent(htmlContent)

      editor.Modal
        .setTitle('Edit HTML')
        .setContent(modalContent)
        .open()

      codeViewer.editor.refresh()
    }
  })
}