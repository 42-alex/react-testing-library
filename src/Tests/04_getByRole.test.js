import { screen, render } from '@testing-library/react';
import SearchWrapper from '../Components/Search/SearchWrapper/SearchWrapper';

// The getByRole function is usually used to retrieve elements by aria-label attributes.
// However, there are also implicit roles on HTML elements -- like button for a button element.


describe('SearchWrapper - getByRole', () => {
  it('element with role "unused_role" is in the document', () => {
    render(<SearchWrapper />);

    expect(screen.getByRole('unused_role')).toBeInTheDocument();  // fails because there is no such role
                                                                       // but it will suggest you in terminal all roles you can reach in the current HTML
  })

  // there is only one accessible role "textbox". This is the implicit role of our <input /> and we can use it to find our element.
  it('element with role "textbox" is in the document', () => {
    render(<SearchWrapper />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();  // succeeds
  })
})

