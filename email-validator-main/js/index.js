


document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submitBtn");
    const validationResult = document.getElementById("validationResult");

    submitBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        validationResult.innerHTML = `<img width="123" src="img/loading.svg" alt="">`;

        const apiKey = "97c20fc3c26d44a5838a2828c69bd8f3";
        const email = document.getElementById("username").value;
        const url = `https://api.zerobounce.net/v2/validate?api_key=${apiKey}&email=${email}`;

        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }

            const result = await res.json();

            let str = `<div>Status: ${result.status}</div>`;
            if (result.status === "valid") {
                str += `<div>Valid email address.</div>`;
            } else if (result.status === "invalid") {
                str += `<div>Invalid email address.</div>`;
            } else {
                str += `<div>Could not validate email address.</div>`;
            }

            validationResult.innerHTML = str;
        } catch (error) {
            validationResult.innerHTML = `<div>Error: ${error.message}</div>`;
        }
    });
});

