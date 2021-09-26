import { screen, render } from '@testing-library/react';
import SearchWrapper from '../Components/Search/SearchWrapper/SearchWrapper';

// check if the element with given text is in document
describe('SearchWrapper - getByText [explicitly]', () => {
  it('element with text "Search:" is in the document [explicitly]', () => {
    render(<SearchWrapper />);

    expect(screen.getByText('Search:')).toBeInTheDocument();
  })
})

// we can do the same as implicit assertion (неявно)
// because getByText() throws an error by default if the element cannot be found
// but it is NOT RECOMMENDED way of using
describe('SearchWrapper - getByText [implicitly]', () => {
  it('element with text "Search:" is in the document [implicitly]', () => {
    render(<SearchWrapper />);

    screen.getByText('Search:')  // if there is no such element it returns something like this "return throw new Error()"
                                      // so formally there is no need to wrap it with expect(). But it is not obvious and less readable
  })
})


// we can also pass a regular expression to getByText()
describe('SearchWrapper - getByText [regular expression]', () => {
  it('element with text "Search:" is in the document [regular expression]', () => {
    render(<SearchWrapper />);

    // succeeds
    expect(screen.getByText(/Search/)).toBeInTheDocument();  // succeeds because a regular expression used as partial match

    // // fails
    // expect(screen.getByText('Search')).toBeInTheDocument();  // fails, because when we pass the string it used as exact match.
    //                                                          // In this case exact string is "Search:"
    //
    // // succeeds
    // expect(screen.getByText('Search:')).toBeInTheDocument();


  })
})