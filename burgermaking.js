function getbread(callback) {
    setTimeout(()=>{
        const bread = "🍔";
        console.log("Base is ready 🍞 ");
        callback(bread);
    },1000)
    
}

function getvegi(bread,callback){
    setTimeout(()=>{
        const  vegi = bread + "🍔";
        console.log("vegies on the base 🥗 🍞");
        callback(vegi);
    },2000)
}

function gettikki(bread,vegi,callback){
    setTimeout(()=>{
        const tikki = bread + vegi + "🍔";
        console.log("tikki is ready 🌭 🥗 🍞")
        callback(tikki);
    },2000)
}

function getcheese(bread,vegi,tikki,callback){
    setTimeout(()=>{
        const cheese = bread + vegi + tikki  +"🍔";
        console.log("cheese on tikki 🧀 🌭 🥗 🍞")
        callback(cheese);
    },2000)
}

function getbread2(bread,vegi,tikki,cheese,callback){
    setTimeout(()=>{
        const bread2 = bread + vegi + tikki + cheese +"🍔";
        console.log("bun is top of the burger 🍞 🧀 🌭 🥗 🍞")
        setTimeout(()=>{
            console.log("now your burger is ready .. 🍔")
        },1000)
        callback(bread2);
    },2000)
}

getbread((bread)=>{
    getvegi(bread,(vegi)=>{
        gettikki(bread,vegi,(tikki)=>{
            getcheese(bread,vegi,tikki,(cheese)=>{
                getbread2(bread,vegi,tikki,cheese,(bread2)=>{
                    setTimeout(()=>{
                        console.log("enjoy your meal.... 🍔 🍽")
                        console.log("😋 😋 😋 😋 😋")
                    },2000)
                })
            })

        })

    })

})