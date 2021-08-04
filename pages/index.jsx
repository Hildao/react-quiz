import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <div className='margin-2px'>
        <input
          className='border-1px padding-8px'
          type='text'
          value={email}
          placeholder='what is your email?'
        />
      </div>
      <div className='margin-2px'>
        <input
          className='border-1px padding-8px'
          type='password'
          value={password}
          placeholder='what is your password?'
        />
      </div>
      <div className='RQ-button-margin'>
        <button className='RQ-button-style RQ-button-style:hover'>
          <Link href='Welcome'>log in</Link>
        </button>
      </div>
    </>
  );
}
