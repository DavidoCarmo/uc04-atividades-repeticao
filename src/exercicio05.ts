let [anterior, atual] = [0, 1];

console.log(anterior);
console.log(atual);

for (let i = 2; i <= 15; i++) {
    [anterior, atual] = [atual, anterior + atual];
    console.log(atual);
}




