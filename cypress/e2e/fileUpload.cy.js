import "cypress-file-upload";
describe("File uploads", () => {
  it("Single file upload", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile("Test.xlsx");
    cy.get("#file-submit").click();
    cy.wait(5000);
    cy.get("#content>div>h3").should("have.text", "File Uploaded!");
  });
  it("File upload - Rename", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile({
      filePath: "Test.xlsx",
      fileName: "myFile.xlsx",
    });
    cy.get("#file-submit").click();
    cy.wait(5000);
    cy.get("#content>div>h3").should("have.text", "File Uploaded!");
  });
  it("File upload - Drag and Drop", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#drag-drop-upload").attachFile("Test.xlsx", {
      subjectType: "drag-n-drop",
    });
  });
  it("Multiple file upload", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.get("#filesToUpload").attachFile(["Test.xlsx", "TestConversion.csv"]);
    cy.wait(5000);
    cy.xpath("//ul[@id='fileList']/preceding-sibling::p[1]/strong").should(
      "contain",
      "Files You Selected:"
    );
  });
  it.only("File upload - Shadow DOM", () => {
    cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
    cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile('Test.xlsx')
  });
});
