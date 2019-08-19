Compose url
=================

Replaces Express URL pattern with regular URL. 

## Install

```sh
npm install @economia/compose-url --save
```

## ES6 import

```js
import { composeURL } from '@economia/compose-url'
``` 

## Common js import

```js
const { composeURL } = require('@economia/compose-url')
```

## Example:
```js
const pattern = '/users/:id'
const params = { id: 42 }

const URL =  composeURL(pattern, params)
// /users/42
```

```js
const pattern = '/users/:id'
const params = {}

const URL = composeURL(pattern, params)
// error
```

Optional parameters end with "?" and can be omitted

```js
const pattern = '/users/:id?'
const params = { id: 42 }

const URL = composeURL(pattern, params)
// /users/42
```

```js
const pattern = '/users/:id?'
const params = {}

const URL = composeURL(pattern, params)
// /users
```
