import React from "react";
import UserData from "../UserData";
import { render } from "@testing-library/react";

describe("User Data", () => {
  it("should render with default props", () => {
    const { getByTestId } = render(<UserData />);
    const element = getByTestId("username");
    expect(element.textContent).toMatch("Anonymous")
  });
  it("should render with props provided", () => {
    const userName="Ellie Smith"
    const { getByTestId } = render(<UserData userName={userName}/>);
    const element = getByTestId("username");
    expect(element.textContent).toMatch(userName)
  });
});
