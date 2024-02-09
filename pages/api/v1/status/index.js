function teste(request, response) {
  response.status(200).json([
    {
      sgl: "Event acronym",
      behavior: "Behavior expression used to describe the behavior of things.",
      describe: "Short description of the acronym."
    },
    {
      sgl: "AT",
      behavior: "ignore",
      describe: "Atestado médico"
    },
    {
      sgl: "LG",
      behavior: "block",
      describe: "Licença gala"
    },
    {
      sgl: "LN",
      behavior: "block",
      describe: "Licença não remunerada"
    },
    {
      sgl: "LP",
      behavior: "block",
      describe: "Licença paternidade"
    },
    {
      sgl: "LR",
      behavior: "block",
      describe: "Licença remunerada"
    },
    {
      sgl: "NJ",
      behavior: "block",
      describe: "Licença nojo"
    },
    {
      sgl: "RC",
      behavior: "ignore",
      describe: "Licença recesso/repouso"
    },
    {
      sgl: "SM",
      behavior: "block",
      describe: "Serviço militar"
    },
    {
      sgl: "SC",
      behavior: "ignore",
      describe: "Suspensão de contrato de trabalho"
    },
    {
      sgl: "SE",
      behavior: "block",
      describe: "Seguro acidente de trabalho"
    },
    {
      sgl: "SN",
      behavior: "ignore",
      describe: "Licença sindical não remunerada"
    },
    {
      sgl: "SR",
      behavior: "ignore",
      describe: "Licença sindical remunerada"
    },
    {
      sgl: "LM",
      behavior: "block",
      describe: "Licença maternidade"
    }
  ]);
}
export default teste;
