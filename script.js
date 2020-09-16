var rejExp = false;
var mac;
function bodyOnload() {
	mac = document.getElementById("mac").innerHTML;
	// podpinam obsł. zdarzeń opuszczenie diva ID"rejon" 
	document.getElementById("rejon").onmouseleave = rejonyOut;
	// podpinam obsł. zdarzeń click na spanie bezpośrednio w divie ID"rejon" 
	document.querySelector("#rejon > span").onclick = rejony;

	odliczanie();
}
function odliczanie() {
	var dzisiaj = new Date();

	var godzina = dzisiaj.getHours();
	if (godzina < 10) godzina = "0" + godzina;
	var minuta = dzisiaj.getMinutes();
	if (minuta < 10) minuta = "0" + minuta;
	var sekunda = dzisiaj.getSeconds();
	if (sekunda < 10) sekunda = "0" + sekunda;
	document.getElementById("zegar").innerHTML = godzina + ":" + minuta + ":" + sekunda;
	document.getElementById("mac").innerHTML = window.innerWidth + "x" + window.innerHeight + " | " + mac;
	document.getElementById("menuL").style.height = window.innerHeight - 20 + "px"; // dopasuj wysokość menuL do okna przeglądarki
	setTimeout("odliczanie()", 1000);
}
function rejony() {
	var text = '<a href="zal_01.htm" class="menuitem">Załadunek</a>';
	text = text + '<a href="piec1_01.htm" class="menuitem">Piec 1</a>';
	text = text + '<a href="piec2_01.htm" class="menuitem">Piec 2</a>';
	text = text + '<a href="dn_01.htm" class="menuitem">DN</a>';
	text = text + '<a href="pos_01.htm" class="menuitem">Pośrednie</a>';
	document.getElementById("rejon").innerHTML = text;
	document.getElementById("linkiRejonu").innerHTML = "";
	rejExp = true;
}
function rejonyOut() {
	if (rejExp) { location.reload() }
}
