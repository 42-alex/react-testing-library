import React from "react";
import axios from "axios";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Stories from '../Components/Stories/Stories';

jest.mock("axios");
const stories = [
  { objectID: "1", title: "Angular" },
  { objectID: "2", title: "React" },
];

describe("App", () => {
  it("fetches news from an API", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: { hits: stories } }));
    render(<Stories />);
    userEvent.click(screen.getByRole("button"));
    // if we successfully fetched stories the component will should show draw <li> for each story and we check this behavior
    const items = await screen.findAllByRole("listitem");
    expect(items).toHaveLength(2);
    // Additional, but not required
    expect(axios.get).toHaveBeenCalledTimes(1);
    // check axios.get parameters. In real tests it will be better to import URL instead of hardcoded string. In this case our test won't fail if we change this URL in real App
    expect(axios.get).toHaveBeenCalledWith(
      "http://hn.algolia.com/api/v1/search?query=React"
    );
  });

  it("fetches news from an API and reject", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));
    render(<Stories />);
    userEvent.click(screen.getByRole("button"));
    // if we have an error our component will should show message "Something went wrong" and we check this behavior
    const message = await screen.findByText(/Something went wrong/);
    expect(message).toBeInTheDocument();
  });

  it("fetches news from an API (alternative)", async () => {
    // this test show how we can expect promise more explicit
    const promise = Promise.resolve({ data: { hits: stories } });
    axios.get.mockImplementationOnce(() => promise);
    render(<Stories />);
    userEvent.click(screen.getByRole('button'));
    await act(() => promise);  // we don't need to know when html markup appears and can find all our list items immediately
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
