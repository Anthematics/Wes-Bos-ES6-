function User(name,email,website) {
    return {
        name:name,
        email:email,
        website:website
    }
}

// or since theyre all the same we can cite the improvement on object literals and make the function look like
// function User (name,email,website) {
    // return {name,email, website}
// }