
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


const userLeft = false
const userWatchingCatMeme = false

function watchTutorialCallback(callback, errorCallback) {
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
}

