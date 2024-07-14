// import { describe, expect } from "vitest";
// import SearchForm from "../SearchForm/SearchForm";

// describe("should update search value on input change", async () => {
//   const { getByPlaceholderText } = expect(SearchForm);

//   const inputElement = getByPlaceholderText("Search...");
//   await fireEvent.change(inputElement, { target: { value: "Luke Skywalker" } });

//   expect(inputElement.value).toBe("Luke Skywalker");
// });

import { it } from "vitest";

it("math is easy", ({ expect }) => {
  expect(2 + 2).toBe(4);
});
