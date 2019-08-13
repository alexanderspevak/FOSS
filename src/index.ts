export function composeURL (entryPath:string, query = {}): string {
  return resolveOptionalParameters(Object.entries(query).reduce((resultPath, queryParams) => {
    const [key, value] = queryParams
    return resultPath.replace(':' + key, value as string)
  }, entryPath))
}

function resolveOptionalParameters (unresolvedPath:string) {
  return unresolvedPath.split('/').reduce((path, queryParam) => {
    const firstCharacter = queryParam.slice(0, 1)
    const lastCharacter = queryParam.slice(-1)

    if (lastCharacter === '?' && firstCharacter === ':') {
      return path
    }

    if (lastCharacter === '?') {
      return path + queryParam.slice(0, -1) + '/'
    }

    return path + queryParam + '/'
  }, '')
}
