
/*
let အက္ခရာ = {
    ကဝဂ် : ["က", "ခ", "ဂ", "ဃ", "င"],
    စဝဂ် : ["စ", "ဆ", "ဇ", "ဈ", "ည"],
    ဋဝဂ် : ["ဋ", "ဌ", "ဍ", "ဎ", "ဏ"],
    တဝဂ် : ["တ", "ထ", "ဒ", "ဓ", "န"],
    ပဝဂ် : ["ပ", "ဖ", "ဗ", "ဘ", "မ"]
};

let သင်ပုန်းကြီး = (index, group) => {
    setTimeout (()=> {
        console.log(`ဤငါးလုံးက${အက္ခရာ.ကဝဂ်}ဖြစ်ပါသည်။`)
        group();
    },1000)

}

let proess = ()=> {
    setTimeout(()=> {
        console.log("အက္ခရာစဥ်များ စတင်ပါပြီ");
        setTimeout(() =>{
            onsole.log(`${အက္ခရာ.ကဝဂ်[3]}သည် ကဝဂ်ဖြစ်ပါသည်။`);
            setTimeout(() =>{
                console.log(`${အက္ခရာ.စဝဂ်[3]}သည် စဝဂ်ဖြစ်ပါသည်။`);
                setTimeout(() =>{
                    console.log(`${အက္ခရာ.ဋဝဂ်[3]}သည် ဋဝဂ်ဖြစ်ပါသည်။`);
                    setTimeout(() =>{
                        console.log(`${အက္ခရာ.တဝဂ်[3]}သည် တဝဂ်ဖြစ်ပါသည်။`);
                        setTimeout(() =>{
                            console.log(`${အက္ခရာ.ပဝဂ်[3]}သည် ပဝဂ်ဖြစ်ပါသည်။`);
                        }, 1000);
                    }, 1000);
                }, 100);
            }, 1000);
        }, 1000);
    }, 1000);
};
သင်ပုန်းကြီး(0, proess);

let အက္ခရာ = {
    ကဝဂ် : ["က", "ခ", "ဂ", "ဃ", "င"],
    စဝဂ် : ["စ", "ဆ", "ဇ", "ဈ", "ည"],
    ဋဝဂ် : ["ဋ", "ဌ", "ဍ", "ဎ", "ဏ"],
    တဝဂ် : ["တ", "ထ", "ဒ", "ဓ", "န"],
    ပဝဂ် : ["ပ", "ဖ", "ဗ", "ဘ", "မ"]
};

let သင်ပုန်းကြီး = (index, group) => {
    return new Promise ((resolve, reject) =>{
        if(true){
            setTimeout(()=>{
                resolve(group());
            }, index);
        }else{
            rejectconsole.log("erroe");
        }
    });
 };

သင်ပုန်းကြီး(2000, () => {
    console.log(`ဤအက္ခရာငါးလုံးက ${အက္ခရာ.ကဝဂ်} ကဝဂ်ဖြစ်ပါသည်။`);
})

.then (()=> {
    return သင်ပုန်းကြီး (2000, () =>{
        console.log("အက္ခရာစဥ်များ စတင်ပါပြီ");
    });
})

.then (()=> {
    return သင်ပုန်းကြီး(1000, ()=> {
        console.log(`${အက္ခရာ.ကဝဂ်[3]}သည် ကဝဂ်ဖြစ်ပါသည်။`);
    });
})
.then (()=> {
    return သင်ပုန်းကြီး(1000, ()=> {
        console.log(`${အက္ခရာ.စဝဂ်[3]}သည် စဝဂ်ဖြစ်ပါသည်။`);
    });
})
.then (()=> {
    return သင်ပုန်းကြီး(1000, ()=> {
        console.log(`${အက္ခရာ.ဋဝဂ်[3]}သည် ဋဝဂ်ဖြစ်ပါသည်။`);
    });
})
.then (()=> {
    return သင်ပုန်းကြီး(1000, ()=> {
        console.log(`${အက္ခရာ.တဝဂ်[3]}သည် တဝဂ်ဖြစ်ပါသည်။`);
    });
})
.then (()=> {
    return သင်ပုန်းကြီး(1000, ()=> {
        console.log(`${အက္ခရာ.ပဝဂ်[3]}သည် ပဝဂ်ဖြစ်ပါသည်။`);
    });
})

.catch(()=> { 
console.log("error");
})

.finaly (()=>{
    console.log("Think")
});
*/


let proess = ()=> {
    setTimeout(()=> {
        console.log("အက္ခရာစဥ်များ စတင်ပါပြီ");
        setTimeout(() =>{
            console.log(`${အက္ခရာ.ကဝဂ်[3]}သည် ကဝဂ်ဖြစ်ပါသည်။`);
            setTimeout(() =>{
                console.log(`${အက္ခရာ.စဝဂ်[3]}သည် စဝဂ်ဖြစ်ပါသည်။`);
                setTimeout(() =>{
                    console.log(`${အက္ခရာ.ဋဝဂ်[3]}သည် ဋဝဂ်ဖြစ်ပါသည်။`);
                },);
                setTimeout(() =>{
                    console.log(`${အက္ခရာ.တဝဂ်[3]}သည် တဝဂ်ဖြစ်ပါသည်။`);
                },);
                setTimeout(() =>{
                    console.log(`${အက္ခရာ.ပဝဂ်[3]}သည် ပဝဂ်ဖြစ်ပါသည်။`);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
};

.catch((error)=> {
    console.log('error, error')
})
သင်ပုန်းကြီး(0, proess);

