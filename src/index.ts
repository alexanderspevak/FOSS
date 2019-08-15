interface IQuery {
  [key: string]: string
}

const CHARS = {
  SLASH: '/',
  QUESTION_MARK: '?',
  COLON: ':'
}

export const composeURL = (entryPath: string, query: IQuery = {}) => {
  const pathParts = entryPath.split(CHARS.SLASH)
  const parsedPathParts = pathParts.map((part: string): any => {
   return part ? handlePart(part, query) : ''
  })

  return parsedPathParts.join('')
}

const handlePart = (part: string, query: IQuery) => {
  const lastCharacter = part.slice(-1)
  const isOptional = lastCharacter === CHARS.QUESTION_MARK

  return part[0] === CHARS.COLON ? replacePart(part, query, isOptional) : `${CHARS.SLASH}${part}`
}

const replacePart = (part: string, query: IQuery, isOptional: boolean) => {
  const partValue = part.replace(/\W/g, '')
  const queryValue = query[partValue]

  if (!queryValue && !isOptional) {
    const message = `Required parameter ${partValue} not provided by query`
    throw new Error(message)
  }

  return queryValue ? `${CHARS.SLASH}${queryValue}` : ''
}
