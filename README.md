# compose-url

#### Replaces express URL pattern with regular URL. 

## USAGE:
const FOSS = require('FOSS');

const pattern = '/users/:id/profile/:name'
const params = '{ id: '999', name: sklep }

const URL = FOSS.composeURL(pattern, params)
// '/users/999/sklep'

### Optional parameters:

#### Optional parameters in path start end with "?" and can be omitted

const pattern = '/users/:id?/profile/:name'
const params = '{ id: '999', name: sklep }

const URL = FOSS.composeURL(pattern, params)
// '/users/999/sklep'

const pattern = '/users/:id?/profile/:name'
const params = '{ name: sklep }

const URL = FOSS.composeURL(pattern, params)
// '/users/sklep'

##### in case that required parameter is not provided, resulting URL will contain non replaced pattern:

const pattern = '/users/:id/profile/:name'
const params = '{ name: sklep }

// '/users/:id/profile/sklep'
