//Callback Practice
let order1 = (call_production) => {
    console.log("Order has been placed. Calling Production now");
    call_production();
};

let production1 = () => {
    console.log("Order has been received. Starting Production");
};

order1(production1);

let stocks = {
    Fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
    Liquids : ["Water", "Ice"],
    holder : ["Cone", "Cup", "Stick"],
    toppings : ["Chocolate", "Peanuts"]
};


let order = (fruits_name, liquid_type , holder_type , toppings_type , call_production) => {
    console.log("Please Wait the user is selecting the required fruits");
    setTimeout(()=>{
       console.log( `${stocks.Fruits[fruits_name]} has been picked by user. Calling Production now`);
       call_production(liquid_type, holder_type, toppings_type);
    }, 2000);
   
};

let production = (liquid_type, holder_type, toppings_type) => {
    console.log("Initiating Production");
    setTimeout(()=>{
        console.log("Cutting Fruits");

        //After Cutting Fruits Adding Water
        setTimeout(()=>{
            console.log(`${stocks.Liquids[liquid_type]} has been picked by user. So, Adding ${stocks.Liquids[liquid_type]}`);

            //Starting the machine
            setTimeout(()=>{
                console.log("Starting the machine");

                //Choosing the holder
                setTimeout(()=>{
                    console.log(`${stocks.holder[holder_type]} has been selected by user. Proceeding with that`);

                    //Choosing the toppings
                    setTimeout(()=>{
                        console.log(`${stocks.toppings[toppings_type]} has been selected by user. Proceeding with that`);

                        //serving the Ice cream
                        setTimeout(()=>{
                            console.log("Serving Ice cream. Thank you for your patience");
                        }, 2000)

                    },3000)

                },2000);

            },1000);

        },1000);

        
    },2000);

        
};

//Uncomment current line Number + 1 to see the output of order
// order(0, 1, 0, 0, production);

console.log("The above code shows Callback hell or wrong code practice. So, we will use Promise to solve it");
console.log("Using Promise");


//Using Promise to solve above task

const is_shop_open = true;

let promiseOrder = (time, work)=>{
    return new Promise((resolve, reject)=>{
        if(is_shop_open){

            setTimeout(()=>{

                resolve(work());

            },time);            
        }
        else{
            reject(console.log("Sorry! We are closed currently."))
        }
    });
};

promiseOrder(2000, ()=>console.log(`${stocks.Fruits[0]} was choosen by the User`))

.then(()=>{
        return promiseOrder(2000, ()=>console.log("Cutting the Fruits"))
    }
)

.then(()=>{
        return promiseOrder(1000, ()=>console.log("Adding water and ice"))
    }
)

.then(()=>{
        return promiseOrder(1000, ()=>console.log("Starting the machine"))
    }
)

.then(()=>{
        return promiseOrder(2000, ()=>console.log(`${stocks.holder[0]} was choosen by the User`))
    }
)

.then(()=>{
        return promiseOrder(3000, ()=>console.log(`${stocks.toppings[0]} was choosen by the User`))
    }
)

.then(()=>{
        return promiseOrder(2000, ()=>console.log("Serving the Ice cream"))
    }
)

.catch((error)=>console.log("Some Error Occoured while serving Ice cream"));

//Now using Async/Await to do same task

function time(ms){
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms);
        }
        else{
            reject(console.log("The shop is closed. Sorry"));
        }
    });
};

async function kitchen(){
    try{
        await time(2000);
        console.log(`${stocks.Fruits[0]} has been selected by user`);

        await time(2000);
        console.log(`Cutting the Fruits`);

        await time(1000);
        console.log(`Adding ${stocks.Liquids[0]} and ${stocks.Liquids[1]}`);

        await time(1000);
        console.log(`Start the machine`);

        await time(2000);
        console.log(`${stocks.holder[0]} has been selected by user`);

        await time(3000);
        console.log(`${stocks.toppings[0]} has been selected by user`);

        await time(2000);
        console.log(`Serve Ice cream`);
    }
    catch(error){
        console.log("Some Error occoured "+error);
    }
}

kitchen();