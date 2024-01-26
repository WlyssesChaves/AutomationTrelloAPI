describe("Card Endpoint - Create and Delete Trello Card", () => {
  let boardId, listId, cardId, testData;

  before(() => {
    cy.fixture("testDataTrello.json").then((data) => {
      testData = data;
      cy.log("Create Board");
      cy.createBoard(testData.boardName).then((body) => {
        boardId = body.id;

        cy.log("Create List");
        cy.createList(boardId, testData.listName).then((id) => {
          listId = id;
        });
      });
    });
  });

  it("should create a new card in the list", () => {
    expect(listId).to.exist;

    cy.log("Create Card");
    cy.api({
      method: "POST",
      url: `${Cypress.env("baseUrl")}/cards`,
      qs: {
        key: Cypress.env("TRELLO_API_KEY"),
        token: Cypress.env("TRELLO_API_TOKEN"),
        idList: listId,
        name: testData.cardName,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id");
      expect(response.body.name).to.equal(testData.cardName);
      cardId = response.body.id;
    });
  });

  it("should delete the newly created card", () => {
    expect(cardId).to.exist;

    cy.log("Delete Card");
    cy.deleteResource("cards", cardId);
  });

  after(() => {
    if (boardId) {
      cy.log("Delete Board");
      cy.deleteResource("boards", boardId);
    }
  });
});
