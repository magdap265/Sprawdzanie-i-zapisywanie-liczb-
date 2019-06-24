
function sprawdz()
    {let liczba = document.getElementById("pole").value;

    let wartosc = " ";
    if (liczba>0) {
        wartosc = " dodatnia";
    } else if (liczba<0) {
        wartosc = " ujemna";
    } else if (liczba==0) {
        wartosc = " zerem";
    } else {
        wartosc = "Wprowadzono niepoprawdą wartość. Proszę wpisać liczbę.";
    }

    if (wartosc == "Wprowadzono niepoprawdą wartość. Proszę wpisać liczbę."){
        document.getElementById("wynik").innerHTML = "Wprowadzono niepoprawdą wartość. Proszę wpisać liczbę.";
    } else document.getElementById("wynik").innerHTML = "Podana liczba jest" + wartosc + ".";
    
    let podpunkty = document.getElementById("lista");
    if (wartosc != "Wprowadzono niepoprawdą wartość. Proszę wpisać liczbę."){
        let podpunkt = document.createElement("li");
        podpunkt.id="podpunkt";
        podpunkty.appendChild(podpunkt);
        podpunkt.innerHTML =  "Liczba " + liczba + " jest " + wartosc +".";
    }
    };
