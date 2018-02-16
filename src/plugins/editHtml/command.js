export default (editor, config) => {
  const { Commands } = editor

  const pfx = editor.getConfig('stylePrefix')
  const modal = editor.Modal
  const codeViewer = editor.CodeManager.getViewer('CodeMirror').clone()
  const container = document.createElement('div')
  const importLabel = ''
  const importCnt = ''
  let viewerEditor = codeViewer.editor

  // Init import button
  const btnImp = document.createElement('button')
  btnImp.type = 'button'
  btnImp.innerHTML = 'Save'
  btnImp.className = `${pfx}btn-prim ${pfx}btn-import`
  btnImp.onclick = e => {
    editor.setComponents(viewerEditor.getValue().trim())
    modal.close()
  }

  // Init code viewer
  codeViewer.set({
    codeName: 'htmlmixed',
    theme: 'hopscotch',
    readOnly: 0
  })

  Commands.add('edit-html', {
    run(editor) {
      const cnt = editor.getHtml()
      
      if (!viewerEditor) {
        const txtarea = document.createElement('textarea')

        if (importLabel) {
          const labelEl = document.createElement('div')
          labelEl.className = `${pfx}import-label`
          labelEl.innerHTML = importLabel
          container.appendChild(labelEl)
        }

        container.appendChild(txtarea)
        container.appendChild(btnImp)
        codeViewer.init(txtarea)
        viewerEditor = codeViewer.editor
      }

      modal.setTitle('Edit Document')
      modal.setContent(container)      
      codeViewer.setContent(cnt || '')
      modal.open()
      viewerEditor.refresh()
    },

    stop() {
      modal.close()
    }
  })
}