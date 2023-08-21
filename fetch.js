async function fetchdata(){
 
    try{
        const response = await fetch("");
        
        if (!response.ok){
            throw new Error("network response was no ok");
        }
        const data = await response.json();
        console.log(data);

    }
    catch(error){
        console.error("error fetching data",error);
    }
}
fetchdata();