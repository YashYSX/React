function delay(time){
     return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve();
        },time)
    })
}



async function placeorder(){
    await delay(2000);
    console.log("order is place")
}

async function startproduction(){
    await delay(2000);
    console.log("production is start")
}

async function printid(){
    await delay(2000);
    console.log("id will print")
}

async function productname(){
    await delay(2000);
    console.log("product name is printed")
}

async function productdes(){
    await delay(2000);
    console.log("order description")
}




async function main()
{
    console.log("ordr is now going to take place")
    await placeorder();
    console.log("product to production");
    await startproduction();
    console.log("production is print id");
    await printid();
    console.log("passing to name");
    await productname();
    console.log("passing to desc");
    await productdes();

}
main();