export default (editor, config = {}) => {
  const { BlockManager } = editor

  BlockManager.add('custom', {
    label: 'Custom HTML',
    category: 'Extras',
    content: {
      type: 'custom',
    },
    attributes: {
      class: 'fa fa-code',
      'data-type': 'custom',
    }
  })
}