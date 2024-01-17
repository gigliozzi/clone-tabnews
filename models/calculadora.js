function somar(numero1, numero2) {
  if (numero1 || numero2 == typeof Number) {
    return numero1 + numero2;
  } else {
    return "ERRO";
  }
}

exports.somar = somar;
