import { screen, render } from '@testing-library/react';
import UserStatus from '../Components/UserStatus/UserStatus';


describe('UserStatus', () => {
  it('user name appears after first render', async () => {
    render(<UserStatus />);

    // queryByText finds by text
    // If didn't find any element it doesn't throw an Error (like getByText does). So we can check on null
    expect(screen.queryByText(/Signed in as/)).toBeNull();

    // findByText works asynchronously. The text appears after fetch() resolves in the hook useEffect()
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
  })
})
