interface IQuery {
  [key: string]: string
}

export const composeURL = (entryPath:string, query: IQuery = {}) => {
  const splitedPath = entryPath.split('/')

  const parsedSplitedPath = splitedPath.map((parameter:string): any => {
    const firstCharacter = parameter.slice(0, 1)
    const lastCharacter = parameter.slice(-1)

    if(firstCharacter === ''){
      return ''
    }

    if(firstCharacter !==':') {
      return `/${parameter}`
    }

    if(lastCharacter ==='?'){
      return handleOptionalParameters(parameter, query)
    }

  return handleMandatoryParameters(parameter, query)
  })

  return parsedSplitedPath.join('')
}

const handleOptionalParameters = (parameter: string, query: IQuery) => {
  const parameterKey = parameter.substring(1, parameter.length - 1)
  if(query[parameterKey]) {
    return `/${query[parameterKey]}`
  }

  return ''
}

const handleMandatoryParameters =  (parameter: string, query: IQuery) => {
  const parameterKey = parameter.substring(1, parameter.length)
  if(query[parameterKey]) {
    return `/${query[parameterKey]}`
  }
  throw new Error('composeURL - please non optional parameters must be provided in query object parameter')
}


console.log(composeURL('/hello/:hello?/:ahoj', {ahoj: 'tomas', hello: 'krystof'}))
