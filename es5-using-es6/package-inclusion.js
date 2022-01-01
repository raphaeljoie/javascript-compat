// require() of ES Module not supported
//let helperModule = require('../es6-package')

import('es6-package').then((helperModule) => {
    helperModule.helper();
})

import('es6-package').then((helperModule) => {
    helperModule.default();
})

import('es6-package').then(({helper}) => {
    helper();
})

