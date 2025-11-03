'use client';

import { useState } from 'react';
import { formatDate, capitalize } from '@/utils';
import type { User } from '@/types';

export default function ExampleComponent() {
  const [user] = useState<User>({
    id: '1',
    name: 'john doe',
    email: 'john@example.com',
    createdAt: new Date(),
  });

  return (
    <div className="glass rounded-glass p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="space-y-2 text-sm">
        <p>
          <span className="font-semibold">Name:</span> {capitalize(user.name)}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-semibold">Member Since:</span>{' '}
          {formatDate(user.createdAt)}
        </p>
      </div>
    </div>
  );
}
