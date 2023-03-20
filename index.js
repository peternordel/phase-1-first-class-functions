function receivesAFunction (cb) {
    cb();
}

function returnsANamedFunction () {
    return function aNamedFunction () {

    }
}

function returnsAnAnonymousFunction () {
    return function () {

    }
}