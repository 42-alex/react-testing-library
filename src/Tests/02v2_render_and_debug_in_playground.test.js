import { screen, render } from '@testing-library/react';
import SearchContainer from '../Components/Search/SearchContainer/SearchContainer';

// this test just render the component
// then creates a link to the test playground in the terminal where you can see the component html and play with queries
describe('SearchContainer render', () => {
  it('renders SearchContainer component', () => {
    render(<SearchContainer />);

    screen.logTestingPlaygroundURL();  // shows the real HTML of your component. It is easier to you to understand what element you want to select.
    // or some more specific element
    // screen.logTestingPlaygroundURL(screen.getByText('test'))
  })
})
