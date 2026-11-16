const utenti= ["ciccioGamer", "icardi", "khaby", "rocco", "anna"];
const elencoPassword= ["ciccio1", "wandanara", "tiktok", "siffredi33" , "tatangelo"];

function apri() {
    let finestra = document.getElementById("creazioneAccount");
    finestra.classList.remove("d-none");
}

function chiudi() {
    let finestra = document.getElementById("creazioneAccount");
    finestra.classList.add("d-none");
}

function creaAccount() {
    let username = document.getElementById("nuovoUsername").value;
    let password = document.getElementById("nuovaPassword").value;
    let errore = document.getElementById("erroreAccount");

    if(username == "" || password == "") return;

    if(utenti.includes(username)) {
        messaggio(errore, "Username già presente", true);
        return;
    }else if(password.length < 6) {
        messaggio(errore, "La password deve essere di almeno 6 caratteri", true);
        return;
    }else {
        utenti.push(username);
        elencoPassword.push(password);
        console.log(utenti);
        messaggio(errore, "Account creato con successo", false);
    }
}

function controllaDati() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errore = document.getElementById("errore");

    if(username == "" || password == "") return;

    if(!utenti.includes(username)) {
        messaggio(errore, "Username non presente", true);
        return;
    }else if(!elencoPassword[utenti.indexOf(username)] == password) {
        messaggio(errore, "Password errata", true);
        return;
    }else {
        messaggio(errore, "Login effettuato con successo", false);
    }

}

function messaggio(p, msg, isError) {
    p.innerHTML = msg;

    if(isError) {
        p.classList.add("bg-danger");
        p.classList.remove("bg-success");
    }else {
        p.classList.add("bg-success");
        p.classList.remove("bg-danger");
    }
}

function cambioTipo() {
    let icona = document.getElementById("occhio");
    let input = document.getElementById("password");

    input.type = input.type == "password" ? "text" : "password";
    icona.classList.toggle("bi-eye");
    icona.classList.toggle("bi-eye-slash");
}