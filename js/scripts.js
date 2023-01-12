window.onload = function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function () {
        event.preventDefault();

        const value1 = parseInt(document.querySelector("input#value1").value);
        const value2 = parseInt(document.querySelector("input#value2").value);
        const value3 = parseInt(document.querySelector("input#value3").value);
        const shipping = document.querySelector("input#shipping").value;
        const payment = document.querySelector("input#payment").value;

        console.log(value1, value2, value3, shipping, payment);

        let result = 0;
        if (value1 !== 0) {
            result = result + value1 * 15;
            if (value1 > 1) {
            result = result * 0.9;
            }
        } if (value2 !== 0) {
            result = result + value2 * 30;
            if (value2 > 1) {
                result = result - value2 * 30* 0.05;
            }
        } if (value3 !== 0) {
            result = result + value2 * 20;
            if (value3 > 1) {
                result = result - value3 *20 * 0.07;
            }
        }
        console.log(result);
        document.getElementById("output").innerText = result;
        document.getElementById("address").innerText = shipping;
    });
}