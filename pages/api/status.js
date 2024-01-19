function status(request, response) {
  response.status(200).json({ adjetivo: "Meu amigo Beto é um FELA (...)" });
}
export default status;
