import { screen, render, fireEvent } from '@testing-library/react';
import App from '../App';


describe('App', () => {
  it('user fetched successfully and search container changes its state (fireEvent)', async () => {
    render(<App />);

    // wait for finish user fetching
    await screen.findByText(/Signed in as/);

    // before fire change event we DON'T EXPECT to see the next text "Looking for JavaScript"
    expect(screen.queryByText(/Looking for JavaScript/)).toBeNull();

    // simulate filling of input with the next "JavaScript" value
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' }
    })

    // after fire change event we EXPECT to see the next text "Looking for JavaScript"
    expect(screen.getByText(/Looking for JavaScript/)).toBeInTheDocument();
  })
})
