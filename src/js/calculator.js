import '../css/calculator.css';

document.addEventListener('DOMContentLoaded', function () {

    const quantity = document.querySelector("#quantity");
    const nonActiveQuantity = document.querySelector(".nonActiveQuantity");
    const monthsOrder = document.querySelector("#monthsOrder");
    const nonActiveMonthsOrder = document.querySelector(".nonActiveMonthsOrder");
    const nonActivePackages = document.querySelector(".nonActivePackages");
    const packages = document.querySelector("#packages");
    const accounting = document.querySelector(".accounting");
    const nonActiveAccounting = document.querySelector(".nonActiveAccounting");
    const rental = document.querySelector(".rental");
    const nonActiveRental = document.querySelector(".nonActiveRental");

    const quantityConverter = 0.5;
    const monthsOrderMap = new Map([['Basic', 10], ['Professional', 30], ['Premium', 60]]);
    const monthsOrderConverter = 0.25;
    let quantityCounter = 0;
    let monthsOrderCounter = 0;
    let packagesCounter = 0;
    let accountingValueCounter = 0;
    let rentalValueCounter = 0;

    quantity.oninput = handleQuantityInput;
    monthsOrder.oninput = handleMonthsOrderInput;

    packages.addEventListener('change', function () {
        packagesCounter = monthsOrderMap.get(this.value);
        nonActivePackages.classList.add('activePackages');
        nonActivePackages.innerHTML = `
        <span class="packageTitle">Package</span>
        <span class="chosenPackage">${this.value}</span>
        <span class="packageValue">$${packagesCounter}</span>
        `;
        sumTotal();
    });

    accounting.addEventListener('change', function () {
        if (this.checked) {
            accountingValueCounter = 20;
            nonActiveAccounting.classList.add('activeAccounting');
            nonActiveAccounting.innerHTML = `
            <span class="accountingTitle">Accounting</span>
            <span class="accountingValue">$${accountingValueCounter}</span>
            `;
            sumTotal();
        } else {
            nonActiveAccounting.classList.remove('activeAccounting');
            accountingValueCounter = 0;
            sumTotal();
        }
    });

    rental.addEventListener('change', function () {
        if (this.checked) {
            rentalValueCounter = 5;
            nonActiveRental.classList.add('activeRental');
            nonActiveRental.innerHTML = `
            <span class="rentalTitle">Terminal</span>
            <span class="rentalValue">$${rentalValueCounter}</span>
            `;
            sumTotal();
        } else {
            nonActiveRental.classList.remove('activeRental');
            rentalValueCounter = 0;
            sumTotal();
        }
    });

    function handleQuantityInput(e) {
        quantityCounter = e.target.value * quantityConverter;
        nonActiveQuantity.classList.add('activeQuantity');
        nonActiveQuantity.innerHTML = `
        <span class="productsTitle">Products</span>
        <span class="productsNumbers">${quantity.value} * ${quantityConverter}</span>
        <span class="productsSum">$${quantityCounter}</span>
        `;
        sumTotal();
    }

    function handleMonthsOrderInput(e) {
        monthsOrderCounter = e.target.value * monthsOrderConverter;
        nonActiveMonthsOrder.classList.add('activeMonthsOrder');
        nonActiveMonthsOrder.innerHTML = `
            <span class="orderTitle">Orders</span>
            <span class="orderNumbers">${monthsOrder.value} * ${monthsOrderConverter}</span>
            <span class="orderSum">$${monthsOrderCounter}</span>
            `;
        sumTotal();
    }

    function sumTotal() {
        let sum = quantityCounter + monthsOrderCounter + packagesCounter + accountingValueCounter + rentalValueCounter;
        const btnTotal = document.querySelector(".total");
        btnTotal.innerText = `$ ${sum}`;
    }

});
