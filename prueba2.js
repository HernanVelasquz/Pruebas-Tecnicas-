
let prueba1 = [1, 3, 2, 0, 7, 8, 1, 3, 0, 6, 7, 1];
// Resultado 123 1378 167
let prueba2 = [2,1,0,0,3,4];

const separar = (arreglo) => {
    let temporal = [];
    let out = "";
    let i = 0;
    while (i < arreglo.length) {
        if (arreglo[i] !== 0 && i + 1 < arreglo.length) {
            temporal.push(arreglo[i])
        } else {
            if (i + 1 == arreglo.length) {
                temporal.push(arreglo[i]);
                out += temporal.sort((int, end) => int - end).join('');
            } else {
                out += temporal.sort((int, end) => int - end).join('') + ' ';
                temporal = [];
            }
            if (i + 1 < arreglo.length && arreglo[i + 1] == 0) {
                out += 'X';
            }
        }

        i++;
    }
    return out;
}

console.log(separar(prueba1));
console.log(separar(prueba2));

