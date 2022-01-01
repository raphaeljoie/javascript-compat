// DIRECT IMPORT
// Directory import is not supported resolving ES modules imported
//import('../es6-package').then((helperModule) => {
//    helperModule.helper();
//})
// module
import('../included-content/es6-package/main.js').then((helperModule) => {
    helperModule.helper();
})
// named export
import('../included-content/es6-package/main.js').then(({helper}) => {
    helper();
})
// default export
import('../included-content/es6-package/main.js').then((helperModule) => {
    helperModule.default();
})
