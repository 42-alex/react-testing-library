import Connection from '../Connection';


jest.mock('./../Connection', () => ({
  __esModule: true,
  default: jest.fn(() => (<></>)),
}));


it('should render a connection view', () => {
  // trigger Connection rendering
  expect(Connection.mock.calls.length).toBe(1);
});




// Option #2
// import Connection from '../Connection';
//
//
// jest.mock('./../Connection');
//
// it('should render a connection view', () => {
//   Connection.mockImplementation(() => 'Connection component');
//   // trigger Connection rendering
//   expect(Connection.mock.calls.length).toBe(1);
// });
