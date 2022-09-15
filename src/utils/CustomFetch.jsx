let ok = true

let customFetch = (time, array) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(ok){
                resolve(array)} else {
                    reject("error")
                }
        }, time);
    }
    )
}

export default customFetch