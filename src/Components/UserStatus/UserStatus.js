import { useState, useEffect } from 'react';

const getUser = () => {
  return new Promise((resolve) => {
    resolve({ id: '1', name: 'Robin' });
  });
  // or the same in shorter form
  // return Promise.resolve({ id: '1', name: 'Robin' });
}

const UserStatus = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    }
    loadUser();
  }, [])

  return (
    <div className="status-wrapper">
      { user && <p>Signed in as { user.name }</p> }
    </div>
  );
};

export default UserStatus;
