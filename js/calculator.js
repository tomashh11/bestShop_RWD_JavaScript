document.addEventListener('DOMContentLoaded', function () {

    const inputQuantity = document.querySelector("#quantity");
    const divActiveQuantity = document.querySelector(".nonActiveQuantity");
    const inputMonthsOrder = document.querySelector("#monthsOrder");
    const divActiveMonthsOrder = document.querySelector(".nonActiveMonthsOrder");
    const divActiveSelectPackages = document.querySelector(".nonActiveSelectPackages");
    const sectionSelect = document.querySelector("#packages");
    const inputAccounting = document.querySelector(".inputAccounting");
    const divAccounting = document.querySelector(".nonActiveInputAccounting");
    const inputRental = document.querySelector(".inputRental");
    const divRental = document.querySelector(".nonActiveInputRental");

    const quantityConverter = 0.5;
    const monthsOrderMap = new Map([['Basic', 10], ['Professional', 30], ['Premium', 60]]);
    const monthsOrderConverter = 0.25;
    let quantityCounter = 0;
    let monthsOrderCounter = 0;
    let packagesCounter = 0;
    let accountingValueCounter = 0;
    let rentalValueCounter = 0;

    function handleQuantityInput(e) {
        quantityCounter = e.target.value * quantityConverter;
        divActiveQuantity.classList.add('activeQuantity');
        divActiveQuantity.innerHTML = `
        <span class="products">Products</span>
        <span class="productsNumbers">${inputQuantity.value} * ${quantityConverter}</span>
        <span class="productsSum">$${quantityCounter}</span>
        `;
        sumTotal();
    }

    inputQuantity.oninput = handleQuantityInput;

    function handleMonthsOrderInput(e) {
        monthsOrderCounter = e.target.value * monthsOrderConverter;
        divActiveMonthsOrder.classList.add('activeMonthsOrder');
        divActiveMonthsOrder.innerHTML = `
            <span class="orders">Orders</span>
            <span class="ordersNumbers">${inputMonthsOrder.value} * ${monthsOrderConverter}</span>
            <span class="ordersSum">$${monthsOrderCounter}</span>
            `;
        sumTotal();
    }

    inputMonthsOrder.oninput = handleMonthsOrderInput;

    sectionSelect.addEventListener('change', function () {
        packagesCounter = monthsOrderMap.get(this.value);
        divActiveSelectPackages.classList.add('activeSelectPackages');
        divActiveSelectPackages.innerHTML = `
        <span class="spanSelect">Package</span>
        <span class="selectPackage">${this.value}</span>
        <span class="selectValue">$${packagesCounter}</span>
        `;
        sumTotal();
    });

    inputAccounting.addEventListener('change', function () {
        if (this.checked) {
            accountingValueCounter = 20;
            divAccounting.classList.add('activeInputAccounting');
            divAccounting.innerHTML = `
            <span class="spanAccounting">Accounting</span>
            <span class="spanAccountingValue">$${accountingValueCounter}</span>
            `;
            sumTotal();
        } else {
            divAccounting.classList.remove('activeInputAccounting');
            accountingValueCounter = 0;
            sumTotal();
        }
    });

    inputRental.addEventListener('change', function () {
        if (this.checked) {
            rentalValueCounter = 5;
            divRental.classList.add('activeInputRental');
            divRental.innerHTML = `
            <span class="spanRental">Terminal</span>
            <span class="spanRentalValue">$${rentalValueCounter}</span>
            `;
            sumTotal();
        } else {
            divRental.classList.remove('activeInputRental');
            rentalValueCounter = 0;
            sumTotal();
        }
    });

    function sumTotal() {
        let sum = quantityCounter + monthsOrderCounter + packagesCounter + accountingValueCounter + rentalValueCounter;
        const btnTotal = document.querySelector(".btnTotal");
        btnTotal.innerText = `$ ${sum}`;
    }

});
