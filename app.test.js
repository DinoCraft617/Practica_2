const greet = require("./app");

test("Debe saludar correctamente", () => {
  expect(greet("Bryan")).toBe("Hola, Bryan!");
});
