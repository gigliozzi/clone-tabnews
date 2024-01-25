function teste(request, response) {
  response.status(200).json([
    {
      sgl: "AT",
      behavior: "ignore"
    },
    {
      sgl: "LM",
      behavior: "reset"
    },
    {
      sgl: "BE",
      behavior: "block"
    }
  ]);
}
export default teste;
