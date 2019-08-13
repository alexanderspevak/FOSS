import each from 'jest-each'
import { composeURL } from '../src'

describe('check if replaceParametersInPath returns corrrect path', () => {
  const query = {
    userId: '123',
    recipeId: '321',
    slug: 'jahodova-pomazanka'
  }

  const path1 = `/recepty/:recipesId?/:slug`
  const resolvedPath1 = `/recepty/${query.slug}/`

  const path2 = `/recept/slug/userId?`
  const resolvedPath2 = `/recept/slug/userId/`

  const path3 = `/recepty/:recipeId?/:slug`
  const resolvedPath3 = `/recepty/${query.recipeId}/${query.slug}/`

  const path4 = `/recepty/:unknown?/:recipeId?/:slug`
  const resolvedPath4 = `/recepty/${query.recipeId}/${query.slug}/`

  each([[path1, resolvedPath1], [path2, resolvedPath2], [path3, resolvedPath3], [path4, resolvedPath4]])
    .test(
      'does replaceParametersInPath function return correct path?',
      (path, resolvedPath) => {
        expect(composeURL(path, query)).toBe(resolvedPath)
      }
    )
})
