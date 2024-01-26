Cypress.Commands.add("createBoard", (boardName) => {
  cy.api({
    method: "POST",
    url: `${Cypress.env("baseUrl")}/boards/`,
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
    url: `${Cypress.env("baseUrl")}/${resourceType}/${resourceId}`,
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
    url: `${Cypress.env("baseUrl")}/boards/${boardId}/lists`,
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
