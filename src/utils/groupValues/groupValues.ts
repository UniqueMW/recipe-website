import _ from 'lodash'

function groupValues(fetchedObject: object, keyStartWith: string): string[] {
  const groupArray: string[] = []
  _.forIn(fetchedObject, (value, key) => {
    if (
      new RegExp(`^${keyStartWith}`).test(key) &&
      typeof value === 'string' &&
      value
    ) {
      groupArray.push(value)
    }
  })
  return groupArray
}

export default groupValues
