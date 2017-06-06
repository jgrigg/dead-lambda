In case your programming teacher forgot to tell you 'global scope is evil'. A quick demo on how to break lambda containers by keeping things in global scope.

## Handlers

### [good.js](good.js)
Handler that does no evil.

### [bad.js](bad.js)
Handler that uses global scope without unwanted side-effects.

### [ugly.js](ugly.js)
Handler that uses global scope that can be catastrophic for the container instance.

## Demo

Deploy with `sls deploy` then `curl` the resulting endpoints. Use query param `fail=true` to fail handler's promise chain.
