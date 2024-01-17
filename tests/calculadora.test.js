const calculadora = require("../models/calculadora");

test("somar 2 + 2 deveria retonar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 2 + 100 deveria retornar 102", () => {
  const resultado = calculadora.somar(2, 100);
  console.log(resultado);
  expect(resultado).toBe(102);
});
