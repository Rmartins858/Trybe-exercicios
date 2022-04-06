const myFizzBuzz = require("./myFizzBuzz");

describe("Requisito 1", () => {
  it("Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  });
});

describe("Requisito 2", () => {
  it("Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz(9)).toBe("fizz");
  });
});

describe("Requisito 3", () => {
  it("Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz(25)).toBe("buzz");
  });
});

describe("Requisito 4", () => {
  it("Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz(11)).toBe(11);
  });
});

describe("Requisito 5", () => {
  it("Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz('2')).toBe(false);
  });
});
