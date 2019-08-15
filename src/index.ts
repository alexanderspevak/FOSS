interface IQuery {
  [key: string]: string
}

export const composeURL = (entryPath:string, query: IQuery = {}) => {
  const pathParts = entryPath.split('/')
  console.log(pathParts)
  const parsedSplitedPath = pathParts.map((parameter:string): any => {
   return parameter ? handleParameters(parameter, query): ''
  })

  return parsedSplitedPath.join('')
}

const handleParameters = (parameter: string, query: IQuery) => {
  const firstCharacter = parameter[0]
  const lastCharacter = parameter.slice(-1)
  const isOptional = lastCharacter ===  '?'

  return firstCharacter === ':' ? handleParameter(parameter, query, isOptional) : `/${parameter}`
}

const handleParameter = (parameter: string, query: IQuery, isOptional: boolean) => {
  const extractedParameter = extractParameter(parameter, isOptional)
  const parameterValue = query[extractedParameter]
  if (!parameterValue && !isOptional) {
    const errorMessage = `Non optional parameter ${extractedParameter} has not been provided in query`
    throw new Error(errorMessage)
  }

  return parameterValue ? `/${parameterValue}` : ''
}

const extractParameter = (parameter: string, isOptional: boolean) => {
  return parameter.slice(1, isOptional ? -1 : parameter.length)
}

