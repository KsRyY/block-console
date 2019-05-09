# `block-console`

> A util to block stderr&stdin stream to prevent them interrupt some long text out

## Usage

``` javascript
const blockConsole = require('block-console');

blockConsole.block(); //This will block your stdin and stderr stream

console.log('some long text');

blockConsole.relieve(); //This will relieve your stdin and stderr stream for other usage
```
