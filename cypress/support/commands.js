Cypress.Commands.add("getBoardsByName", (boardName) => {
  cy.api({
    method: "GET",
    url: "https://api.trello.com/1/members/me/boards",
    qs: {
      key: "f2099091002809769b2469f5d0b6c3d2",
      token:
        "ATTA7cd5b23135226b7a3158289d7e6e84cd652b0ea36d9bb23c4c32ce010edc2e41CEBE1163",
      fields: "name",
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    const boards = response.body;
    const matchingBoards = boards
      .filter((b) => b.name === boardName)
      .map((b) => b.id);
    if (matchingBoards.length === 0) {
      throw new Error(`No boards found with name: ${boardName}`);
    }
    return matchingBoards;
  });
});

Cypress.Commands.add("createBoard", (boardName) => {
  cy.api({
    method: "POST",
    url: "https://api.trello.com/1/boards/",
    qs: {
      key: Cypress.env("TRELLO_API_KEY"),
      token: Cypress.env("TRELLO_API_TOKEN"),
      name: boardName,
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    return response.body;
  });
});

Cypress.Commands.add("deleteResource", (resourceType, resourceId) => {
  cy.api({
    method: "DELETE",
    url: `https://api.trello.com/1/${resourceType}/${resourceId}`,
    qs: {
      key: Cypress.env("TRELLO_API_KEY"),
      token: Cypress.env("TRELLO_API_TOKEN"),
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});

Cypress.Commands.add("createList", (boardId, listName) => {
  cy.api({
    method: "POST",
    url: `https://api.trello.com/1/boards/${boardId}/lists`,
    qs: {
      key: Cypress.env("TRELLO_API_KEY"),
      token: Cypress.env("TRELLO_API_TOKEN"),
      name: listName,
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    return response.body.id;
  });
});
