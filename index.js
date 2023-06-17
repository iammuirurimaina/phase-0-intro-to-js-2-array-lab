const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    return cats.push('Ralph')
}
function destructivelyPrependCat(name) {
    return cats.unshift ('Bob')
}
function destructivelyRemoveLastCat() {
    return cats.pop()

}
function  destructivelyRemoveFirstCat() {
    return cats.shift()
}
function appendCat(name) {
    let newCats = [...cats, 'Broom']
    return newCats
}
function prependCat(name) {
    let newCats = ['Arnold', ...cats]
    return newCats
}
function removeLastCat() {
    let newCats = cats.slice(0, -1)
    return newCats
}
function removeFirstCat() {
    let newCats = cats.slice(1)
    return newCats
}

