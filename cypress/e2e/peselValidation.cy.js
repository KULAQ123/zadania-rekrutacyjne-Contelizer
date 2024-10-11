describe("Walidacja numeru PESEL", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("div.text", "Zadanie drugie").click();
  });

  it("Wyświetlenie informacji poprawnego numeru PESEL", () => {
    cy.get('input[type="text"]').type("44051401359");
    cy.get('div[type="button"]').click();

    cy.get("p")
      .should("have.class", "success")
      .and("contain", "Numer PESEL jest poprawny.");
  });

  it("Wyświetlenie błędu dla niepoprawnego Numeru PESEL", () => {
    cy.get('input[type="text"]').type("44051401358");
    cy.get('div[type="button"]').click();

    cy.get("p")
      .should("have.class", "error")
      .and("contain", "Numer PESEL jest niepoprawny.");
  });

  it("Wyświetlenie błędu dla zbyt krótkiego numeru PESEL", () => {
    cy.get('input[type="text"]').type("12345");
    cy.get('div[type="button"]').click();

    cy.get("p")
      .should("have.class", "error")
      .and("contain", "Numer PESEL musi składać się z 11 cyfr.");
  });

  it("Wyświetlenie błędu dla nie-numerycznego numeru PESEL", () => {
    cy.get('input[type="text"]').type("4405140A359");
    cy.get('div[type="button"]').click();

    cy.get("p")
      .should("have.class", "error")
      .and("contain", "Numer PESEL musi składać się z 11 cyfr.");
  });
});
