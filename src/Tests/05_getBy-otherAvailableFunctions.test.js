import React from 'react';
import { screen, render } from '@testing-library/react';

// here is the list of functions for searching elements
// getByText()
// getByRole()
// getByLabelText()
// getByPlaceholderText()
// getByAltText()
// getByDisplayValue()
// getByTestId()


const HelloWorldComponent = () => {
  const [textAreaValue, setTextAreaValue] = React.useState('this is for test purposes')

  return (
    <>
      <img src="image_src" alt="React official logo" />
      <h1 role="main" data-testid="page_header">Hello world</h1>
      <label htmlFor="answer">Write your answer:</label>
      <input id="answer" placeholder="Enter something in response to the greeting" />
      <textarea value={textAreaValue} onChange={(e) => setTextAreaValue(e.target.value)} />
    </>
  )
}

describe('Example of all getBy functions', () => {
  it('getByText()', () => {
    render(<HelloWorldComponent />);

    // <h1>Hello world</h1>
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  })

  it('getByRole()', () => {
    render(<HelloWorldComponent />);

    // <h1 role="main">Hello world</h1>
    expect(screen.getByRole('main')).toBeInTheDocument();
  })

  it('getByLabelText()', () => {
    render(<HelloWorldComponent />);

    // <label>Write your answer:</label>
    expect(screen.getByLabelText('Write your answer:')).toBeInTheDocument();
  })

  it('getByPlaceholderText()', () => {
    render(<HelloWorldComponent />);

    // <input placeholder="Enter something in response to the greeting" />
    expect(screen.getByPlaceholderText('Enter something in response to the greeting'))
      .toBeInTheDocument();
  })

  it('getByAltText()', () => {
    render(<HelloWorldComponent />);

    // <img src="image_src" alt="React official logo" />
    expect(screen.getByAltText('React official logo'))
      .toBeInTheDocument();
  })

  it('getByDisplayValue()', () => {
    render(<HelloWorldComponent />);

    // <textarea value="this is for test purposes" />
    expect(screen.getByDisplayValue('this is for test purposes'))
      .toBeInTheDocument();
  })

  it('getByTestId()', () => {
    render(<HelloWorldComponent />);

    // <h1 data-testid="page_header">Hello world</h1>
    expect(screen.getByTestId('page_header'))
      .toBeInTheDocument();
  })
})

