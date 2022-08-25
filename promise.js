//promise has three factor i.e 
// pending
// resolve
// rejected

let p=new Promise((resolve,reject)=>{
    let a=1+1

    if(a==2){
        resolve('success')
    }
    else{
        reject('Failed')
    }
})
p.then((message)=>{
    console.warn(`this is in the promise ${message}`)
}).catch((err)=>{
    console.warn(`this in the promise: ${err}`)
})