oppgave1

var tall= Math.round(Math.random() *100);
console.log(tall);
while (true){
    var gjett = prompt ("Gjett tallet (mellom 0 og 100):");

  if (gjett < tall) {
    alert("skriv tall høyere");
  } else if (gjett > tall) {
    alert("skriv tall mindre");
  } else {
    alert('gratulerer');
    break;
  }
}

oppgave2

for (let i = 0; i < 10; i++) {
  for (let k = 0; k < 10; k++) {
    document.write(k+ "  ")
}
document.write("<br>")
}
for (let i = 0; i < 10; i++) {
  console.log(" 0 1 2 3 4 5 6 7 8 9");

}