function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function receivesAFunction(named) {
        return named
    }
}

function returnsAnAnonymousFunction() {
    return function (named){
        return named
    }

}
