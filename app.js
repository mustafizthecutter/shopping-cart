function updateResult(product, price, isIncraesing) {
    const productPlus = document.getElementById(product + '-number');
    let productNumber = productPlus.value;
    if (isIncraesing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productPlus.value = productNumber;
    const productTotal = document.getElementById(product + '-result');
    productTotal.innerText = productNumber * price;
    getCalculate();

}
function getInputvalue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;

}
function getCalculate() {


    const caseTotal = getInputvalue('case') * 59;

    const phoneTotal = getInputvalue('phone') * 1219;
    const subTotal = caseTotal + phoneTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
// handle phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateResult('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateResult('phone', 1219, false);
})

// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateResult('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateResult('case', 59, false);
})