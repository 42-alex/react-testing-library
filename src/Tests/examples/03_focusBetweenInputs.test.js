import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe('focus change', () => {
  it('focus changing with "tab" key', () => {
    const { getAllByTestId } = render(
      <div>
        <input data-testid="element" type="checkbox" />
        <input data-testid="element" type="radio" />
        <input data-testid="element" type="number" />
      </div>
    )

    const [checkbox, radio, number] = getAllByTestId('element')
    userEvent.tab();
    expect(checkbox).toHaveFocus();
    userEvent.tab();
    expect(radio).toHaveFocus();
    userEvent.tab();
    expect(number).toHaveFocus();
  })
})