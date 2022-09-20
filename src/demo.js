// let str = "hello everyone"

// let str1 =  str.trim().split('')
// let obj ={}
// let count = 0

// for(let i=0; i<str1.length; i++){
//     for(let key in obj){
//         if(key === str1[i]){
//             count++
//         }else{
//             obj[str1[i]] = count
//         }
//     }
// }

// (function (){
//   for (let i =0; i < 3; i ++) {
//         setTimeout(() => {
//          console.log(i);
//         }, 1000)
//        }
// })()

// let obj = {
//     name: 'Sourav',
//     getName: function () {
//         console.log(this);
//     }
// }

// setTimeout(obj.getName, 1000)

// let arr1= [1,2]
// let arr2 =[];
// arr2 = [...arr1]
 
// arr2.push(3)
 
// console.log(arr1);
// console.log(arr2);

// (function pop(){
//     console.log('hello')
// })

// pop();

// function curr(a) {
//     return function (b) {
//         if(b) return curr(a+b)
//         else return a
//     }
// }

// console.log(curr(4)());


// function mulBy2() {
//   let cached = {};

//   return function (a) {
//     if (a in cached) {
//       return cached[a];
//     } else {
//       cached[a] = a * 2;
//       return cached[a];
//     }
//   };
// }

// let memo = mulBy2()
// console.log(memo(2))
// console.log(memo(2))

// let flat = (...arr) => {
//     let res = []
//     for(let i=0; i<arr.length; i++){
//         if(isNaN(arr[i])){
//             res.push(...arr[i])
//         }else{
//             res.push(arr[i])
//         }
//     }

//     return res
// }

// console.log(flat(1,2,3,[6,7,8],5));

// function* genFunc(){
//     yield 3;
//     yield 4;
//   }

//   let res = genFunc()

//   console.log(res.next());
//   console.log(res.next());
//   console.log(res.next());





// var arr=[1,2,3,4,5]
// var arr1=arr.splice(1,3)
// console.log(arr)

let axios = require('axios')
let express =  require('express')
let app = express()
let port = 8080

app.get('/', (req,res) => {
    let response
    axios.get("https://dog.ceo/api/breeds/list/all")
      .then(re => {
        const replacerFunc = () => {
          const visited = new WeakSet();
          return (key, value) => {
            if (typeof value === "object" && value !== null) {
              if (visited.has(value)) {
                return;
              }
              visited.add(value);
            }
            return value;
          };
        };
        
        response = JSON.stringify(re, replacerFunc());
        res.send(JSON.parse(response))
      })
      // console.log(response)
      // res.send(response)
    
})

app.listen(port)







// Input [3,4,3,5,3,6]
// Output[3:3,4:1,5:1,6:1]

// let arr = [3,4,3,5,3,6]

// let fun = (arr) => {
//     let obj = {}
//     let count = 0
//     arr.sort((a,b) => a < b)
//     for(let i=0; i<arr.length; i++){
//        if(arr[i])
//     }
// }




















