const { encode, decode } = require("./encode");

describe("testando encode e decode", () => {
  it("Teste se encode e decode são funções", () => {
    expect(typeof encode).toEqual("function");
    expect(typeof decode).toEqual("function");
  });

  it("Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente", () => {
    expect(encode("aeiou")).toEqual("12345");
  });

  it("Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;", () => {
    expect(decode("12345")).toEqual("aeiou");
  });

  it("Teste se as demais letras/números não são convertidos para cada caso;", () => {
    expect(decode("123xz")).toEqual("aeixz");
  });

  it("Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.", () => {
    expect(decode("12345")).toEqual("aeiou");
  });


});
