// console.log("start")

// setTimeout(()=>{
//   console.log("Preparing data");
//   const data = {
//     server: "aws",
//     port: 2000,
//     status: "working"
//   }
//   setTimeout(()=>{
//     data.modified = true;
//     console.log("Data received", data);
//   },3000)
// },2000)

// const p = new Promise(function(resolve, reject){
//   setTimeout(() => {
//     console.log("Preparing data");
//     const data = {
//       server: "aws",
//       port: 2000,
//       status: "working"
//   }
//   resolve(data);
//   },2000)
// })

// p.then(data=>{
//   return new Promise((resolve,reject) => {
//     setTimeout(()=>{
//       data.modified = true;
//       resolve(data);
//     },2000);
//   });
// }).then(newdata =>{
//   console.log(newdata);
//   newdata.fromServer = true;
//   return newdata;
// }).then(newdata =>{
//   console.log(newdata); 
// })




// console.log("start");
// setTimeout(()=>{
//     console.log("Data is prepared....");
//     const data = {
//         serveer : "AWS",
//         port : 1000,
//         yaer : 2024
//     };
//     setTimeout(()=>{
//         data.modified = true;
//         console.log("Modified Data");
//         setTimeout(()=>{
//             console.log("Data recieved");
//             console.log(data);
//         },1000);
//     },2000);
// },3000)

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


