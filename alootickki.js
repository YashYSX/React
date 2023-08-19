function getallo(callback){
    setTimeout(()=>{
        const allo = "😊";
        console.log("here we got the allo");
        callback(allo);
    },500)
}

function makedough(allo,callback){
    setTimeout(()=>{
        const dough = allo +  "😊";
        console.log("dough is ready");
        callback(dough);
    },500)
}

function makeallokulcha(allo,dough,callback){
    setTimeout(()=>{
        const kulcha =allo + dough +"😊";
        console.log("kulcha is ready");
        callback(kulcha);
    },500)
}

getallo((allo)=>{
    makedough(allo,(dough)=>{
        makeallokulcha(allo,dough,(kulcha)=>{
            console.log("kha le bhai tu ab.......");
        })
    })
})
