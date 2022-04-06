const requisitos = require("./sum");

describe("Requisito 1", () => {
  it("Teste se o retorno de sum(4, 5) é 9", () => {
    expect(requisitos(4, 5)).toBe(9);
  });
});

describe("Requisito 2", () => {
  it("Teste se o retorno de sum(0, 0) é 0", () => {
    expect(requisitos(0, 0)).toBe(0);
  });
});

describe("Requisito 3", () => {
  it("Teste se a função sum lança um erro quando os parâmetros são 4 e 5 (string 5)", () => {
    expect(() => {
      requisitos(4, "5");
    }).toThrow("parameters must be numbers");
  });
});

describe("Requisito 4", () => {
  it("Teste se a função sum lança um erro quando os parâmetros são 4 e 5 (string 5)", () => {
    expect(() => {
      requisitos(4, "5");
    }).toThrowError(Error);
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
