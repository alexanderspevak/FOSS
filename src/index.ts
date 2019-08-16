interface IQuery {
  [ key: string ]: string
}

const SIGN = {
  SEPARATOR: '/',
  OPTIONAL: '?',
  PARAMETER: ':'
}

export const composeURL = (entryPath: string, query: IQuery = {}) => {
  const pathParts = entryPath.split(SIGN.SEPARATOR)
  const parsedPathParts = pathParts.map((part: string): any => {
   return part ? handlePart(part, query) : ''
  })

  return parsedPathParts.join('')
}

const handlePart = (part: string, query: IQuery) => {
  const lastCharacter = part.slice(-1)
  const isOptional = lastCharacter === SIGN.OPTIONAL

  return part[0] === SIGN.PARAMETER ? replacePart(part, query, isOptional) : `${SIGN.SEPARATOR}${part}`
}

const replacePart = (part: string, query: IQuery, isOptional: boolean) => {
  const key = extractKey(part, isOptional)
  const value = query[key]

  if (!value && !isOptional) {
    const message = `Required parameter ${key} not provided by query`
    throw new Error(message)
  }

  return value ? `${SIGN.SEPARATOR}${value}` : ''
}

const extractKey = (input: string, isOptional: boolean) => {
  return input.slice(1, isOptional ? -1 : 0)
}
