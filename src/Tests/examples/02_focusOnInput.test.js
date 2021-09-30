import { render } from "@testing-library/react";

describe('focus', () => {
  it('input focus', () => {
    // render our element or component and get the selector we want to use (getByTestId)
    const { getByTestId } = render(
      <input type="text" data-testid="simple-input" />
    )

    // use selector getByTestId to get our input
    const input = getByTestId('simple-input');

    expect(input).not.toHaveFocus();
    input.focus();                      // set focus
    expect(input).toHaveFocus();
  })
})