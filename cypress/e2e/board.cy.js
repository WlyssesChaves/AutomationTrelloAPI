describe("Board Endpoint - Create and Delete Trello Board", () => {
  let boardId;
  let testData;

  before(() => {
    cy.fixture("testDataTrello.json").then((data) => {
      testData = data;
    });
  });

  it("should create a new board", () => {
    cy.log("Create Board");
    cy.createBoard(testData.boardName).then((body) => {
      boardId = body.id;
      expect(body.name).to.equal(testData.boardName);
    });
  });

  it("should delete the newly created board", () => {
    expect(boardId).to.exist;

    cy.log("Delete Board");
    cy.deleteResource("boards", boardId).then(() => {});
  });
});
