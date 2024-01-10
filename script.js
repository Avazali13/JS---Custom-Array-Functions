//&
// includes();  ++                    callBackFn qebul etmir
// indexOf();   ++
// reverse();   ++
// join();      ++                    callBackFn qebul etmir
// find();      ++
// findIndex(); ++                    callBackFn qebul etmir
// filter();    ++
// every();     ++
// some();      ++
// reduce();    --

//! Find
// let myArr=[0,1,3,4,5];
// Array.prototype.customFind=function(callBackFn){
//     for(let i=0;i<this.length;i++){
//         if(callBackFn(this[i],i,this)){
//         return this[i];
//     }
//     }

// }

// let res = myArr.customFind((val,i,arr)=>{
//     if(i>3)
//     return i
// })
// console.log(res);

//!FindIndex
// let myArr=[0,7,2,3,4,8,5];
// Array.prototype.customFindIndex=function(callBackFn){
//     for(let i=0;i<this.length;i++){
//         if(callBackFn(this[i],i,this)){
//             return i
//         }
//     }
// }
// let res=myArr.customFindIndex((val,i,arr)=>{
//     return val==7
// })

// console.log(res);

//!indexOf
// let myArr=[0,7,2,3,4,8,5];
// Array.prototype.customIndexOf=function(nese){
// for(let i=0;i<this.length;i++){
//     if(nese==this[i]){
//         return i
//     }
// }
// }

// let res=myArr.customIndexOf(8)
// console.log(res);

//!every
// let myArr=[0,7,2,3,4,8,5];
// Array.prototype.customEvery=function(callBackFn){
// for(let i=0;i<this.length;i++){
//     if(callBackFn(this[i],i,this)){
//         return true
//     }return false
// }
// }

// let res=myArr.customEvery((val,i,arr)=>{
//     return val>=1
// })
// console.log(res);

//!some
// let myArr=[0,7,2,3,4,8,5];

// Array.prototype.customSome=function(callBackFn){
//     for(let i=0;i<this.length;i++){
//         if(callBackFn(this[i])){
//             return true
//         }
//     }
//     return false
// }

// let res=myArr.customSome((val,i,arr)=>{
//     return val<=0
// })
// console.log(res);

//!filter
// let myArr=[0,7,2,3,4,8,5];
// let myArr2=['spray', 'elite', 'exuberant', 'destruction', 'present'];
// Array.prototype.customFilter=function(callBackFn){
//     let arrays=[];
//     for(let i=0;i<this.length;i++){
//         if(callBackFn(this[i],i,this)){
//           arrays.push(this[i])
//         }
//     }
//     return arrays
// }

// let res=myArr2.customFilter((val,i,arr)=>{
//     return val.length>6
// })

// console.log(res);

//!includes
// let myArr = [0, 7, 2, 3, 4, 8, 5];
// let myArr2 = ["spray", "elite", "exuberant", "destruction", "present"];

// Array.prototype.customIncludes = function (nese) {
//   for (let i = 0; i < this.length; i++) {
//     if (nese == this[i]) {
//       return true;
//     }
//   }
//   return false
// };

// let res=myArr.customIncludes(1)

// console.log(res);


//!reverse
// let myArr = [0, 7, 2, 3, 4, 8, 5];
// let myArr2 = ["spray", "elite", "exuberant", "destruction", "present"];

// Array.prototype.customReverse=function(callBackFn){
//     let reversed=[];
//     for(let i=this.length-1;i>=0;i--){
//        reversed.push(this[i])
//     }
//     return reversed
// }


// let res=myArr2.customReverse()

// console.log(res);

//!join

// let myArr = [0, 7, 2, 3, 4, 8, 5];
// let myArr2 = ["spray", "elite", "exuberant", "destruction", "present"];

// Array.prototype.customJoin=function(str){
//     let joined='';
//     for(let i=0;i<this.length;i++){
//        joined= joined+this[i]+str
//     }

//     return joined;
// }

// let res=myArr.customJoin('-');
// console.log(res);


//!reduce  -----alinmiyib-----

// let myArr3 = [0, 7, 2, 3, 4, 8, 5];
// // let myArr2 = ["spray", "elite", "exuberant", "destruction", "present"];

// Array.prototype.customReduce=function(callBackFn){

//     for(let i=0;i<this.length;i++){
//         if(callBackFn(this[i],i,this))
//            return this[i]
        
//     }
//     let prevValue=1
   
// }

// let res2=myArr3.customReduce((val,i,arr)=>{
//     prevValue=2
//     return prevValue+val
// })

// console.log(res2);


//   const myArr=[1,2,3,4,5];
// let res=myArr.reduce((prevValue,val,i,arr)=>{
//     return prevValue+val
//   },0)
//   console.log(res);
  

// let myArr = [0, 7, 2, 3, 4, 8, 5];
// Array.prototype.customReduce = function(callback, initialValue) {

//     let acc = initialValue || 0
//     for (let i = 0; i < this.length; i++) {
//        if( callback(this[i]) ){
//          currentValue = this[i]

//        }
// };
// return acc
// }

// let res=myArr.customReduce((acc,currentValue)=>{
//     return acc+currentValue
// },5)
// console.log(res);