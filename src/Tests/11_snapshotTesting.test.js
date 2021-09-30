import { render } from '@testing-library/react';
import SearchContainer from '../Components/Search/SearchContainer/SearchContainer';

describe('SearchContainer', () => {
  it('create snapshot of SearchContainer component', async () => {
    const { asFragment } = render(<SearchContainer />);

    expect(asFragment()).toMatchSnapshot();
  })
})
