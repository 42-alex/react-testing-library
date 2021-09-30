import { screen, render, fireEvent } from '@testing-library/react';
import Search from '../Components/Search/Search';


describe('Search', () => {
  it('calls the onChange callback handler', async () => {
    // mock our callback handler with jest
    const onChange = jest.fn();

    // pass mocked callback to the component
    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
      );

    // imitate change event in Search component input (fills it with text 'JavaScript')
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' }
    })

    // check if our handler called one time
    expect(onChange).toHaveBeenCalledTimes(1);

    // we could use userEvent as well, but it triggers our callback for every key stroke, e.g.
    //    userEvent.type(screen.getByRole('textbox'), 'JAVA');
    //    expect(onChange).toHaveBeenCalledTimes(4);
  })
})
