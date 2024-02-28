describe("Handle tables", () => {
  beforeEach("Login", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
  });
  it("Check number of rows and columns", () => {
    cy.get(".table.table-bordered>tbody>tr").should("have.length", 5);
    cy.get(".table.table-bordered>thead>tr>th").should("have.length", 3);
  });
  it("Check cell data from specific row and column", () => {
    cy.get(
      ".table.table-bordered>tbody>tr:nth-child(4)>td:nth-child(3)"
    ).should("have.text", 46);
  });
  it("Read data from first page", () => {
    cy.get(".table.table-bordered>tbody>tr").each(($row, index, $rows) => {
      cy.get(".table.table-bordered>tbody>tr")
        .eq(index)
        .find("td")
        .each(($col, index, $cols) => {
          cy.log($col.text());
        });
    });
  });
  it.only("Read data from all pages", () => {
    let totalPages;
    let flag = false;
    cy.xpath('//a[@aria-label="Next"]/../preceding-sibling::li[1]/a/span').then(
      (pages) => {
        totalPages = pages.text();
        cy.log(totalPages);
        for (let index = 1; index <= totalPages; index++) {
          if (index < 4) {
            cy.get(".table.table-bordered>tbody>tr").each(
              ($row, index, $rows) => {
                cy.wrap($row)
                  .find("td:nth-child(1)")
                  .then(($col) => {
                    cy.log($col.text());
                  });
              }
            );
            cy.xpath('//a[@aria-label="Next"]').click();
            cy.wait(3000);
          } else {
            cy.get(".table.table-bordered>tbody>tr").each(
              ($row, index, $rows) => {
                cy.wrap($row)
                  .find("td:nth-child(1)")
                  .then(($col) => {
                    cy.log($col.text());
                  });
              }
            );
          }
        }
      }
    );
  });
});
