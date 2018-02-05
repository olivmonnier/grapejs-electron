import { selectFiles, selectFile } from '../../utils/dialog'
import { readFileAndParse } from '../../utils/file'

const COMPONENTS_TYPES = {}

function storeComponentType(component) {
  const { id, model, defaults, isComponent } = component

  COMPONENTS_TYPES[id] = {
    model, defaults, isComponent
  }
}

function addComponent(editor, component) {
  const { DomComponents } = editor
  const { id, model, defaults, isComponent } = component

  if (id && model && defaults && isComponent) {
    const modelType = DomComponents.getType(model).model
    const viewType = DomComponents.getType(model).view

    storeComponentType(component)

    DomComponents.addType(id, {
      model: modelType.extend({
        defaults: Object.assign({}, modelType.prototype.defaults, defaults)
      }, {
        isComponent(el) {
          if (typeof isComponent === 'function') {
            return isComponent(el)           
          } else {
            let cond = true

            Object.keys(isComponent).forEach((prop) => {
              if (!cond) return

              cond = el[prop] === isComponent[prop]
            })
  
            if (cond) return { type: id }
          }
        }
      }),
      view: viewType
    })
  }
}

function addComponents(editor, components) {
  components.forEach(component => addComponent(editor, component))
}

function addComponentsByFilePath(editor, filePath) {
  if (filePath) {
    const componentsParsed = readFileAndParse(filePath)
    const { components } = componentsParsed

    if (components) {
      addComponents(editor, components)
    }
  }
}

function getComponents() {
  let components = []

  if (COMPONENTS_TYPES && COMPONENTS_TYPES !== {}) {
    for (let key in COMPONENTS_TYPES) {
      const comp = COMPONENTS_TYPES[key]
      const { defaults, model, isComponent } = comp

      components.push({
        id: key,
        model,
        defaults,
        isComponent
      })
    }
  }

  return components
}

export default function (editor, config = {}) {
  const { Commands } = editor

  Commands.add('addComponent', {
    run(component) {
      addComponent(editor, component)
    }
  })

  Commands.add('addComponents', {
    run(components) {
      addComponents(editor, components)
    }
  })

  Commands.add('getComponents', {
    run() {    
      return getComponents()
    }
  })

  Commands.add('importComponents', {
    run() {
      selectFiles([
        { name: 'JavaScript Object Notation', extensions: ['json'] }
      ]).then(filesPath => filesPath && filesPath
        .forEach(file => addComponentsByFilePath(editor, file)))
    }
  })
}