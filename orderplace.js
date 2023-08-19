const placeorder = (callback)=>{
    setTimeout(()=>{
        console.log("production is start");
        callback();
    },2000)
}

const startproduction = (callback)=>{
    setTimeout(()=>{
        console.log("passing id");
        callback();
    },2000)
}

const ptintID = (callback)=>{
    setTimeout(()=>{
        console.log("production print");
        callback();
    },2000)
}


const productname = (callback)=>{
    setTimeout(()=>{
        console.log("product name");
        callback();
    },2000)
}

const productdes = (callback)=>{
    setTimeout(()=>{
        console.log("production desc");
        callback();
    },2000)
}








console.log("order is now to ready......")
placeorder(()=>{
    console.log("pass to production")
    startproduction(()=>{
        console.log("passing to id")
        ptintID(()=>{
            console.log("passing name")
            productname(()=>{
                console.log("pass desc")
                productdes(()=>{
                    console.log("all task is end")
                })
            })
        })
    })
})