function teste(request, response) {
  response.status(200).json({
    cargo1: "BUSINESS PARTNER",
    cargo2: "CURADOR LIDER",
    cargo3: "DIRETOR*",
    cargo4: "GERENTE*",
    cargo5: "GESTOR*",
    cargo6: "PRÓ-REITOR*",
    cargo7: "VICE DIRETOR*",
    cargo8: "VICE PRESIDENTE*",
    cargo9: "VICE REITOR*"
  });
}
export default teste;
