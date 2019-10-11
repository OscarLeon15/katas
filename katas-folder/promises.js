
// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1
//     if(a == 2){
//         resolve('success')
//     } else{
//         reject('Failed')
//     }
// })


// p.then((message) => {
//     console.log('this is in the then' + message);
// }).catch((message) => {
//     console.log('this is in the catch' + message);
// })


// const userLeft = false
// const userWatchingCatMeme = false

// function watchTutorialCallback(callback, errorCallback) {
//     if (userLeft) {
//         errorCallback({
//             name: 'User Left',
//             message: ':('
//         })
//     } else if (userWatchingCatMeme) {
//         errorCallback({
//             name: 'User watching cat meme',
//             message: 'web deb < cat'
//         })
//     } else {
//         callback('thumbs up and subcribe')
//     }
// }

// watchTutorialCallback((message) => {
//     console.log('Success: ' + message);
// },(error) => {
//     console.log(error.name + ' ' + error.message);
// }) 


const userLeft = false
const userWatchingCatMeme = false

function watchTutorialpromise() {
    return new Promise((resolve, reject) => {
    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User watching cat meme',
            message: 'web deb < cat'
        })
    } else {
        callback('thumbs up and subcribe')
    }  
    })

}

watchTutorialpromise().then((message) => {
    console.log('Success: ' + message);
}).catch((error) => {
    console.log(error.name + ' ' + error.message);
})



const recordVideoOne = new Promise((resolve, reject) => {
    resolve('video 1 recorded')
}) 

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('video 2 recorded')
}) 

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('video 3 recorded')
}) 

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
}) 
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
}) 
