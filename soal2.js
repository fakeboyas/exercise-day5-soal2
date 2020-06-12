let tempC = prompt(
    "Masukan suhu celcius yang ingin anda konversikan ke farenheit"
);
let tempF = prompt(
    "Masukan suhu celcius yang ingin anda konversikan ke farenheit"
);

//celcius ke fahrenheit
multiplyByNineFifths = (tempC) => {
    return tempC * (9 / 5);
};

getFahrenheits = (celcius) => {
    return multiplyByNineFifths(celcius) + 32;
};

document.getElementById("demo2-1").innerHTML = `${getFahrenheits(
    tempC
)} Derajat Fahrenheit`;

//fahrenheit ke celcius
multiplyByFifthNine = (tempF) => {
    return tempF - 32;
};

getCelcius = (fahrenheits) => {
    return multiplyByFifthNine(fahrenheits) * (5 / 9);
};
document.getElementById("demo2-2").innerHTML = `${getFahrenheits(
    tempF
)} Derajat Celcius `;
