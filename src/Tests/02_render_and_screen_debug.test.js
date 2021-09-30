import { screen, render } from '@testing-library/react';
import SearchContainer from '../Components/Search/SearchContainer/SearchContainer';

// this test just render the component
// then it outputs the component html in the terminal
describe('SearchContainer render', () => {
  it('renders SearchContainer component', () => {
    render(<SearchContainer />);

    screen.debug();  // shows the real HTML of your component. It is easier to you to understand what element you want to select.
  })
})
