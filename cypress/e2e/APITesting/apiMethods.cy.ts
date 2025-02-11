
it('GET Call', ()=>{
    cy.request('GET', "https://jsonplaceholder.typicode.com/posts/1")
    .its('status')
    .should('equal', 200)
})

it('Post call', ()=>{
    cy.request({
        method: 'POST',
        url: "https://jsonplaceholder.typicode.com/posts/",
        body: {
            title: 'Testing for first time in year in feb 2024',
            body: 'All about testing',
            userId: 1
        }

    })
})

it('Put call', ()=>{
    cy.request({
        method: 'PUT',
        url: "https://jsonplaceholder.typicode.com/posts/1",
        body: {
            title: 'Updated Testing for not first time in 2023',
            body: 'All about testing',
            userId: 1,
            id: 1
        }
    })
})

it('Delete call', ()=>{
    cy.request({
        method: 'DELETE',
        url: "https://jsonplaceholder.typicode.com/posts/1"
    })
    .its('status')
    .should('equal', 200)
})