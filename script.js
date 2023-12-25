let randomCode; // Declare the variable outside the function

document.getElementById("btn1").addEventListener("click", () => {
    let getColor = () => {
        const randomNumber = Math.floor(Math.random() * 16777215);
        randomCode = "#" + randomNumber.toString(16);
        document.body.style.backgroundColor = randomCode;
        document.getElementById("h1").innerHTML = "Hex Color code is:  " + randomCode;
    }

    getColor();
});

getColor();

document.getElementById("btn2").addEventListener("click", () => {
    if (randomCode) {
        navigator.clipboard.writeText(randomCode)
            .then(() => {
                alert(`Color code "${randomCode}" copied to clipboard!`);
            })
            .catch((err) => {
                console.error('Unable to copy to clipboard', err);
            });
    } else {
        alert('No color code available to copy!');
    }
});
