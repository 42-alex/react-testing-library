import { fireEvent, render } from "@testing-library/react";

describe('checkbox testing', () => {
  it('checkbox unchecked and then checked (v1)', () => {
    // container will contain link to the DOM element which contains our component or markup
    const { container } = render(
      <input type="checkbox" />
    );

    // get our checkbox element; we could do the same with "container.getByRole"
    const checkbox = container.firstChild;

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  })

  it('checkbox unchecked and then checked (v2)', () => {
    // the same test as previous one but with another implementation
    // mock handler function with jest
    const handleChange = jest.fn();

    // render our element and get the selector we want to use (getByRole)
    const { getByRole } = render(
      <input type="checkbox" onChange={handleChange} />
    );

    const checkbox = getByRole('checkbox');

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  })
})