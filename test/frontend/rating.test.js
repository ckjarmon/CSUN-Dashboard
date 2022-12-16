import React from "react"
const { render, screen } = require('@testing-library/react');
const { RatingsPage } = require('../../code-assets/frontend/csun-dash/src/pages/RatingsPage')

test('returns the correct section number based on class (16615) for Comp 589', () => {
    render(<RatingsPage />);
    expect(screen.getByRole("heading")).toHaveTextContent(/Doggy Directory/);
    //expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
    //expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
    //expect(screen.getByRole("img")).toBeInTheDocument();
  //expect(RatingsPage()).toBe(16615);
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