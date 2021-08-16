import { useState } from 'react';
import TextField from '@/ui/text-field';

const defaultValues = {
  email: '',
  password: '',
  name: '',
  phone: '',
};

export default function Register() {
  const [values, setValues] = useState(defaultValues);
  const { email, password, name, phone } = values;

  function formIsValid() {
    return email && password && name && phone;
  }

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
              onChange={(email) =>
                setValues((prev) => ({
                  ...prev,
                  email,
                }))
              }
            />
          </div>
          <div>
            <TextField
              className='border p-2 w-full'
              type='password'
              value={password}
              placeholder='what is your password?'
              onChange={(password) =>
                setValues((prev) => ({
                  ...prev,
                  password,
                }))
              }
            />
          </div>

          <div>
            <TextField
              value={name}
              placeholder={'Please enter your full name'}
              onChange={(name) =>
                setValues((prev) => ({
                  ...prev,
                  name,
                }))
              }
            />
          </div>

          <div>
            <TextField
              value={phone}
              placeholder={'+44 (0) 7123-123456'}
              onChange={(phone) =>
                setValues((prev) => ({
                  ...prev,
                  phone,
                }))
              }
            />
          </div>

          <div>
            <button
              disabled={!formIsValid()}
              onClick={() => alert('clicked')}
              className={`w-full rounded-sm py-2 px-6 border uppercase ${
                !formIsValid()
                  ? 'text-gray-900 border-gray-200 bg-gray-100 '
                  : 'text-white border-purple-500 bg-purple-500 hover:bg-white hover:text-purple-500'
              }`}
            >
              register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
