Compose url
=================

Replaces Express URL pattern with regular URL. 

## Install

```sh
npm install @economia/compose-url --save
```

## ES6 import

```js
import Feed from '@economia/compose-url'
``` 

## Common js import

```js
const Feed = require('@economia/compose-url')
```

## Example:
```js
import composeUrl from '@economia/compose-url';

const pattern = '/users/:id/profile/:name'
const params = { id: 999, name: sklep }

const URL =  composeURL(pattern, params)
````

## Result
``js
  '/users/999/sklep'
``

## Example:
```js
const pattern = '/users/:id/profile/:name'
const params = { name: sklep }
```
in case that required parameter is not provided, resulting URL will contain non replaced pattern:
## Result
``js
  '/users/:id/profile/sklep'
``

## Optional parameters:

Optional parameters in path end with "?" and can be omitted

## Example:
```js
const pattern = '/users/:id?/profile/:name'
const params = { id: 999, name: 'sklep' }

const URL = composeURL(pattern, params)
```
## Result
``js
  '/users/999/sklep'
``
## Example:
```js
const pattern = '/users/:id?/profile/:name'
const params = { name: sklep }

const URL = composeURL(pattern, params)
```
## Result
``js
  '/users/sklep'
``


