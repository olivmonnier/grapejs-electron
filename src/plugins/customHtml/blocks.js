export default (editor, config = {}) => {
  const { BlockManager } = editor

  BlockManager.add('custom', {
    label: 'Custom HTML',
    category: 'Extras',
    attributes: { class: 'fa fa-code' },
    content: `<div data-type="custom">${config.contentBlock}</div>`
  })
}