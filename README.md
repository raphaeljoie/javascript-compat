# JavaScript compatibility
> ES6? ES5? `import` or `require`? direct or package import?
> This repo is designed to help with the understanding of compatibility
> issues and solutions when it comes to using and mixing different version of JavaScript

ES6 is an enormous (like, really huge) evolution in JavaScript after 6 years stuck in version ES5.
One of the most notorious change is the code splitting management. ES5 uses `require` to 
import a piece of code within another file, ES6 rather opt for `import`. 

If —like me— you already struggled with compatibility, you may find this repo useful because it offers a solution
for every situation, and describe the corner cases to avoid.

| ↗            | ES5 file | ES6 file | ES6-compat file | ES5 package | ES6 package | ES6-compat package |
|--------------|----------|----------|-----------------|-------------|-------------|--------------------|
| ES5 requires | ✅        | ⚠️       | ✅               | ✅           | ⚠️          | ✅                  |
| ES6 imports  | ✅        | ✅        | ✅               | ✅           | ✅           | ✅                  |

## Concepts

* **package import**: when the content to be imported is a whole package described by a `package.json` file.
  The path to that reference file is registered in the `dependencies` of the parent package.
  ```javascript
  { 
    "dependencies" : { 
      "my-package": "file:path/to/other/package" 
    } 
  }
  // and later
  import 'my-package';    // if you write in ES6
  require('my-package');  // if you write in ES5
  ```
* **direct import**: the content to be imported is not listed in any `package.json` but a file to
  be included is directly targeted
  ```javascript
  import 'path/to/other/package/file.js';    // if you write in ES6
  require('path/to/other/package/file.js');  // if you write in ES5
  ```

## Writing in ES6
Because it is the new version, there is a seamless solution for ES5+6 direct or package import.

### Package import of ES6 package
```
import { namedExport } from 'my-package';
import defaultExport from 'my-package';
import * as wholePackage from 'my-package';
```

### Direct import of ES6 file
TODO

### Package import of ES5 package
> TODO Edge case of default export


## Useful links
* status of JS feature in Node versions: https://node.green/
* most popular JS package repos: https://gist.github.com/anvaka/8e8fa57c7ee1350e3491