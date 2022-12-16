const { ProfessorsSearchPage } = require('../../code-assets/frontend/csun-dash/src/pages/ProfessorSearchPage')

test('returns the correct section number based on class (16615) for Comp 589', () => {
  expect(ProfessorsSearchPage()).toBe(16615);
});




/*
Format to write tests
const { func1, funcN } = require('../../code-assets/frontend/csun-dash/src/pages/SomeTest')
alternate import {func1, funcN} from '../../code-assets/frontend/csun-dash/src/pages/SomeTest'

test("returns the correct list of professors", () => {
    expect(TryThis()).toBe(6);
});

in SomeTest.js we need to export all functions
export {TryThis, TryThat}
*/