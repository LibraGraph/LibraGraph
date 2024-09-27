// UserProfiles.js
import React from 'react';

const UserProfiles = ({ users }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-neutral-900 p-6 rounded-lg text-left shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-xl font-bold mb-4">{user.name}</h2>
          <p className="text-lg mb-2">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-lg mb-2">
            <strong>Role:</strong> {user.role}
          </p>
          <p className="text-lg mb-2">
            <strong>Phone:</strong> {user.phone}
          </p>
          <p className="text-lg mb-2">
            <strong>Address:</strong> {user.address}
          </p>
          <p className="text-lg">
            <strong>Favorite Books:</strong>{' '}
            {user.favoriteBooks.join(', ')}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserProfiles;
