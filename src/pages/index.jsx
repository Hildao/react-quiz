import { useState } from 'react';
import Link from 'next/link';
import TextField from '@/ui/text-field';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='container mx-auto'>
      <div className='w-1/2 mx-auto mt-16'>
        <h1 className='font-extrabold text-2xl text-gray-600 mb-4'>
          Welome to my site...
        </h1>
        <div className='space-y-2'>
          <div>
            <TextField
              value={email}
              placeholder={'please enter your email'}
              onChange={(email) => setEmail(email)}
            />
          </div>
          <div>
            <input
              className='border p-2 w-full'
              type='password'
              value={password}
              placeholder='what is your password?'
            />
          </div>

          <div>
            <button className='w-full rounded-sm py-2 px-6 border text-white border-purple-500 bg-purple-500 hover:bg-white hover:text-purple-500'>
              log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
