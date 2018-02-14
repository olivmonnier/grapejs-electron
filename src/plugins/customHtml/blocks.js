export default function (editor, config = {}) {
  const { BlockManager } = editor

  BlockManager.add('html-code', {
    attributes: { class: 'fa fa-code' },
    label: 'HTML Code',
    content: '<div data-html-code>Edit my HTML content</div>'
  })
}