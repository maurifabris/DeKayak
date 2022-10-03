let ok = true

let customFetch = (array) => {
    return new Promise((resolve, reject) => {
        if (ok) {
            resolve(array)
        } else {
            reject("error")

        }
    }
    )
}

export default customFetch