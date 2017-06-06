A quick demo on how to break lambda containers by keeping things in global state.

## Handlers

### [good.js](good.js)
Handler that does no evil.

### [bad.js](bad.js)
Handler uses global state(evil) without unwanted side-effects.

### [ugly.js](ugly.js)
Handler uses global state that can be catastrophic for the container instance.

## Demo

Deploy with `sls deploy` then curl the resulting endpoints. Use query param `fail=true` to fail handler's promise chain.
