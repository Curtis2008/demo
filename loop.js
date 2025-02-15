const divBy2 = []

for (let i = 0; i <= 100; i ++) {
    if (i % 3 === 0 && i !==0) continue;
    if (i % 2 === 0 && i !==0) divBy2.push(i);

    if(divBy2.length >= 20) break;

}

console.log(divBy2);