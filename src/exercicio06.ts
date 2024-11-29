const celsiusToFahrenheit = (celsius: number): number => celsius * 1.8 + 32;

const printConversionTable = (): void => {
  console.log("Celsius\tFahrenheit");
  for (let celsius = 10; celsius <= 100; celsius += 10) {
    console.log(`${celsius}\t${celsiusToFahrenheit(celsius).toFixed(2)}`);
  }
};


printConversionTable();
