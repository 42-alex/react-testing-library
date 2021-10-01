import { screen, render } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';


describe('App', () => {
  it('user fetched successfully and search container changes its state (userEvent)', async () => {
    render(<App />);

    // wait for finish user fetching
    await screen.findByText(/Signed in as/);

    // before fire change event we DON'T EXPECT to see the next text "Looking for JavaScript"
    expect(screen.queryByText(/Looking for JavaScript/)).not.toBeInTheDocument();

    // simulate filling of input with the next "JavaScript" value
    userEvent.type(screen.getByRole('textbox'), 'JavaScript');

    // after fire change event we EXPECT to see the next text "Looking for JavaScript"
    expect(screen.getByText(/Looking for JavaScript/)).toBeInTheDocument();
  })

  it('click with Ctrl and Shift keys pressed', () => {
    render(
      <input type="checkbox" />
    )

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    userEvent.click(checkbox, { ctrlKey: true, shiftKey: true });  // here we can pass additional options as object in second parameter
    expect(checkbox).toBeChecked();
  })

  it('double click', () => {
    const handleChange = jest.fn();

    render(
      <input type="checkbox" onChange={handleChange} />
    )

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    userEvent.dblClick(checkbox);
    expect(checkbox).toHaveBeenCalledTimes(2);
  })
})
