// promise example:
// const cart = [];
const cart = ['item1', 'item2', 'item3'];
createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })
    // if we add a catch here it will only check for the callback present above it
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function (err) {
        console.log(err.message)
    });

function createOrder(cart) {
    return new Promise(function (resolve, reject) {
        if (cart.length > 0) {
            setTimeout(function () {
                const orderId = '1234';
                resolve(orderId)
            }, 5000);
        } else {
            const err = new Error('Cart is not valid')
            reject(err);
        }
    });
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        if(orderId.length > 0) resolve('Payment Successful for order: ' + orderId);
        reject(new Error('Payment Unsuccessful for order'));
    });
}