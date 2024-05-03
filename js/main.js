// const sleep2 = ms2=>{
//     setTimeout(()=>{
//         console.log("sleep 2 seconds");
//     },ms2)
// }
// sleep2(2000);


// const sleep = ms=> {
//     return new Promise(resolve =>{
//       setTimeout(()=>resolve(),ms)
//     }).then(()=>{
//       console.log(`sleep ${ms/1000} seconds`);
//     })
//   }
//   sleep(2000);


// const sleep = ms=> {
//     return new Promise((resolve,reject)=>{
//         if (ms >=2000){
//             setTimeout(()=>resolve(),ms);
//         }
//         else {
//             setTimeout(()=>reject(),ms);
//         }
//     })
//     .then(()=>{
//         console.log("sleeped anough. It's time to work");
//         return new Promise(resolve =>{
//             setTimeout(()=>resolve(), ms*2);
//         }).then(()=>console.log("Okay, great job!"))
//     })
//     .catch(()=>console.log("not anough"));
    
// }
// sleep(2000);

                                    //Должен быть сервер с колбэками
// _________________________________Server через промисы с колбэками
// const p = new Promise((resolve, reject)=>{
    //     console.log("Preparing data");
    //     setTimeout(()=>{
    //         const data = {
    //             server: "aws",
    //             port : 2000
    //         };
    //         resolve(data);
    //     },2000)
    // })
    // p.then(newData =>{
    //     const p2 = new Promise((resolve,reject)=>{
    //         console.log("Data Prepared. Modifiing...");
    //         setTimeout(()=>{
    //             newData.modified = true;
    //             resolve(newData);
    //         },2000)
    //     })
    //     p2.then(clientData=>{
    //         console.log("receiving data....");
    //         setTimeout(()=>{
    //             console.log("Data:", clientData);
    //         },1000)
    //     })
    // })
    
                        //Сервер эмуляция через промимы и return
// const p = new Promise((resolve, reject) =>{
//     console.log("Preparing data...");
//     setTimeout(()=>{
//         const data = {
//             server : "awd", 
//             port: 2000
//         };
//         resolve(data);
//     },3000)
// }).then(newData=>{
//     return new Promise((resolve, reject)=>{
//         console.log("Data prepared. Start modifiing...");
//         setTimeout(()=>{
//             newData.modified = true;
//             resolve(newData)
//         },4000)
//     });
// }).then(clientData =>{
//     console.log("Data recieved")
//     setTimeout(()=>{
//         console.log(clientData);
//     },2000)
// })

                    //return  не промис, а данные
// const p = new Promise((resolve, reject) =>{
//     console.log("Preparing data...");
//     setTimeout(()=>{
//         const data = {
//             server : "awd", 
//             port: 2000
//         };
//         resolve(data);
//     },3000)
// }).then(newData=>{
//     return new Promise((resolve, reject)=>{
//         console.log("Data prepared. Start modifiing...");
//         setTimeout(()=>{
//             newData.modified = true;
//             resolve(newData)
//         },4000)
//     });
// }).then(clientData =>{
//     clientData.edited = "true";
//     return clientData;
// }).then(finalData => console.log(finalData))


// async\await
// async function f1(){
//     const res = await fetch('https://www.boredapi.com/api/activity/');
//     //.then(data =>{console.log("f1",data)})
//     return res;
// }
// async function f2(){
//     const res = await fetch('https://www.boredapi.com/api/activity/');
//     // .then(data =>{console.log("f1",data)})
//     return res;
// ;}
// async function  go(){
//     let a =f1();
//     console.log("a=", a);
//     let b = f2();
//     console.log("b=", b);
// }
// go();
