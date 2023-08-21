const placeorder = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        //console.log("production is start");
        resolve();
        },2000)
    })
}

const startproduction = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        //console.log("production is start");
        resolve();
        },2000)
    })
}

const ptintID = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        //console.log("production is start");
        resolve();
        },2000)
    })
}


const productname = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        //console.log("production is start");
        resolve();
        },2000)
    })
}

const productdes = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        //console.log("production is start");
        resolve();
        },2000)
    })
}







console.log("order is now to ready......")
placeorder()
    .then(()=>{
        console.log("pass to production")
        return startproduction();
    })

    
.then(()=>{
    console.log("passing to id")
    return ptintID();
})

.then(()=>{
    console.log("passing name")
    return productname();
})

.then(()=>{
    console.log("product desc")
    return productdes();
})
.catch((error)=>{
    console.log("error")
    return error();
})

