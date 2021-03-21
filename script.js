(function() {
    "use strict";

    let veebivorm = document.getElementById("broneering")
    veebivorm.addEventListener("submit", checkFields);
    
    function checkFields(event) {
        event.preventDefault();

        let alguskuupaev = document.getElementById("alguskuupäev");
        if (alguskuupaev.value === "") {
            alert("Palun sisestage broneeringu alguskuupäev!");
            alguskuupaev.focus();
            return;
        }

        let lopukuupaev = document.getElementById("lõpukuupäev");
        if (lopukuupaev.value === "") {
            alert("Palun sisestage broneeringu lõpukuupäev!");
            lopukuupaev.focus();
            return;
        }

        if (lopukuupaev.value < alguskuupaev.value) {
            alert("Alguskuupäev peab olema enne lõpukuupäeva!");
            alguskuupaev.focus();
            return;
        }

        let email = document.getElementById("email");
        if (email.value === "") {
            alert("Palun sisestage oma email!");
            email.focus();
            return;
        }
        else if (!email.value.includes("@")) {
            alert("Palun sisestage korrektne emaili aadress!");
            email.focus();
            return;
        }

        veebivorm.reset()
        alert("Broneering edukalt saadetud!");
    }
})();