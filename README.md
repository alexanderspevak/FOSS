Compose url
=================

Replaces Express URL pattern with regular URL. 

## Install

```sh
npm install @economia/compose-url --save
```

## ES6 import

```js
import { composeURL }from '@economia/compose-url'
``` 

## Common js import

```js
const { composeURL } = require('@economia/compose-url')
```

## Example:
```js
const pattern = '/users/:id/profile/:name'
const params = { id: 999, name: sklep }
const URL =  composeURL(pattern, params)
 // /users/999/profile/sklep
 ```
 in case that required parameter is not provided, resulting URL will contain non replaced pattern:
 ```js
const pattern = '/users/:id/profile/:name'
const params = { name: sklep }
const URL = composeURL(pattern, params)
 // /users/:id/profile/sklep
```

Optional parameters in path end with "?" and can be omitted

```js

const pattern = '/users/:id?/profile/:name'
const params = { id: 999, name: 'sklep' }

const URL = composeURL(pattern, params)
 // /users/999/profile/sklep
```

```js
const pattern = '/users/:id?/profile/:name'
const params = { name: sklep }

const URL = composeURL(pattern, params)
// /users/profile/sklep
```



