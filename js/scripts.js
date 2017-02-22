//zadanie 8.5

var a = prompt('Podaj liczbę "a"');
	b = prompt('Podaj liczbę "b"');
	value = (a * a) + (2 * a * b) - (b * b);
alert('Wnik działania (a * a) + (2 * a * b) - (b * b) = ' + value);
console.log('Wynik = ' + value)

if (value > 0) {
	console.log('wynik dodatni')
} else if (value = 0) {
	console.log('wynik = ' + 0)
} else {
	console.log('wynik ujemny')
}