import { useState, useContext, createContext } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleLogin }}>
      Message: { children }
    </AuthContext.Provider>
  )
};

const ConsumerComponent = () => {
  const { isLoggedIn, toggleLogin } = useContext(AuthContext);

  return (
    <>
      <input type="button" onClick={toggleLogin} value="Log In" />
      { isLoggedIn ? "Welcome!" : "Please, log in" }
    </>
  )
};


describe('Context', () => {
  // test passing data from Context to component and ability to interact with the passed data
  it('Consumer component shows default value', () => {
    const { getByText } = render(
      <AuthProvider>
        <ConsumerComponent />
      </AuthProvider>
    )
    // check if the element is in DOM and it renders default text message
    expect(getByText(/^Message:/)).toHaveTextContent("Message: Please, log in")
  })

  it('Consumer component toggle value', () => {
    const { getByText, getByRole } = render(
      <AuthProvider>
        <ConsumerComponent />
      </AuthProvider>
    )
    // check if the element is in DOM and it renders default text message
    expect(getByText(/^Message:/)).toHaveTextContent("Message: Please, log in");
    // first button click and expect login toggle
    userEvent.click(getByRole('button'));
    expect(getByText(/^Message:/)).toHaveTextContent("Message: Welcome!");
    // second button click and expect login toggle
    userEvent.click(getByRole('button'));
    expect(getByText(/^Message:/)).toHaveTextContent("Message: Please, log in");
  })
})