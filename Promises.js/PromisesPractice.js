// 1.   What is the order of output?
//b,e,d,c,h,i,a,f,g

// setTimeout(() => {
//     console.log('a');
// }, 1);
// console.log('b');

// new Promise( (res,rej) => {res('c')}).then((val) => console.log('d', val));
// console.log('e');

// setTimeout(() => {
//   console.log('f');
// }, 0);

// setTimeout(() => {
//     console.log('g');
// }, 3);

// new Promise( (res) => {res('h')}).then(res => console.log(res, 'i'))

// // 2.   Create a promise for something you may, or may not do.

// let promiseLearn = true;
// let learnedPromises = new Promise (function (resolve, reject) {
//     setTimeout(()=> {
//         if (promiseLearn) {
//             resolve(' I learned promises!');
//         } else {
//             reject('What is going on?');
//         }
//     })
// console.log(learnedPromises)
// }

// 3.   Create a new promise for something you may or may not do. 
//      After a few seconds log whether it has been done.

// let promiseLearn = true,
// let learnedPromises = new Promise (function (resolve, reject) {
//     setTimeout(()=> {
//         if (promiseLearn) {
//             resolve('I learned promises!');
//         } else {
//             reject('What is going on?');
//         }
//     }, 9 * 1000);
// });

// 4.   Using the prior example use .then and .catch to handle responses and rejections

// let promiseLearn = learnedPromises(true);
// promiseLearn 
//     .then(success => console.log(success))
//     .catch(reason => console.log(reason))
//     .finally(() => console.log(' I already know promises'));

// 5.   What does a promise resolve to?

// pending, fullfilled, rejected

// 6.   Using HTML & CSS, write a promise that, after 5 seconds changes the existing text on the web-page