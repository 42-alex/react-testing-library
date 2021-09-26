import { screen, render } from '@testing-library/react';
import SearchWrapper from '../Components/Search/SearchWrapper/SearchWrapper';

// this test just render the component
// then it outputs the component html in the terminal
describe('SearchWrapper render', () => {
  it('renders SearchWrapper component', () => {
    render(<SearchWrapper />);

    screen.debug();  // shows the real HTML of your component. It is easier to you to understand what element you want to select.
  })
})
