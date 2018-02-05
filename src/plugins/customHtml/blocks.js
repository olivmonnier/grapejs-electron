export default (editor, config = {}) => {
  const { BlockManager } = editor

  BlockManager.add('template', {
    label: 'Custom HTML',
    category: 'Extras',
    attributes: { class: 'fa fa-code' },
    content: `<div data-type="template"></div>`
  })
}