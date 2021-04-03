# mailto ![cypress version](https://img.shields.io/badge/cypress-6.8.0-brightgreen)

![Demo image](./media/demo.png)

<details style="display:none">
<summary>Demo image test</summary>

<!-- fiddle Mailto screenshot -->
```js
cy.visit('/'); // localhost:3000
cy.get('#to').type('me');
cy.get('#subject').type('Date night');
cy.get('#body').type('Have plans?');
cy.get('#output').should(
  'have.text',
  'mailto:me?subject=Date%20night&body=Have%20plans%3F',
);
cy.get('#mailto').screenshot('mailto');
```
<!-- fiddle-end -->
</details>

## Details

Fork of [dawsbot/mailto](https://github.com/dawsbot/mailto) for a presentation
