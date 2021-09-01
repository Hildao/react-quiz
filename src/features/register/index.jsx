import { useState } from 'react';
import TextField from '@/ui/text-field';

const defaultErrors = {
  emailId: [],
  passwordId: [],
  nameId: [],
  phoneId: [],
};

const defaultValues = {
  email: '',
  password: '',
  name: '',
  phone: '',
};

export default function Register({ siteTitle }) {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState(defaultErrors);

  const { email, password, name, phone } = values;
  const { emailId, passwordId, nameId, phoneId } = errors;

  function formIsValid() {
    return email && password && name && phone;
  }

  function isRequired(val) {
    return val.length > 0 ? '' : 'Can not be blank';
  }

  function isEmail(val) {
    const ai = val.indexOf('@');
    const gdi = val
      .split('')
      .reduce((acc, char, i) => (char === '.' ? i : acc), 0);
    return ai > -1 && gdi > ai ? '' : 'enter a valid email';
  }

  function isPassword(val) {
    return val.length > 6
      ? ''
      : 'password must be more than six characters.';
  }

  function isPhone(val) {
    return val.length === 11 ? '' : 'phone number must be 11 digits';
  }

  function registerAccount() {
    fetch('/api/register', {
      method: 'post',
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((json) => console.dir(json));
  }

  return (
    <div className='w-1/2 mx-auto mt-16'>
      <h1 className='font-extrabold text-2xl text-gray-600 mb-4'>
        Welome to my site... ({siteTitle})
      </h1>
      <div className='space-y-2'>
        <div>
          <TextField
            label='Email'
            name='emailId'
            value={email}
            placeholder={'please enter your email'}
            onChange={(email) =>
              setValues((prev) => ({
                ...prev,
                email,
              }))
            }
            validations={[isRequired, isEmail]}
            errors={emailId}
            setErrors={setErrors}
          />
        </div>
        <div>
          <TextField
            label='Password'
            name='passwordId'
            type='password'
            value={password}
            placeholder='what is your password?'
            onChange={(password) =>
              setValues((prev) => ({
                ...prev,
                password,
              }))
            }
            validations={[isRequired, isPassword]}
            errors={passwordId}
            setErrors={setErrors}
          />
        </div>

        <div>
          <TextField
            label='Full name'
            name='nameId'
            value={name}
            placeholder={'Please enter your full name'}
            onChange={(name) =>
              setValues((prev) => ({
                ...prev,
                name,
              }))
            }
            validations={[isRequired]}
            errors={nameId}
            setErrors={setErrors}
          />
        </div>

        <div>
          <TextField
            label='Phone'
            name='phoneId'
            value={phone}
            placeholder={'12345676890'}
            onChange={(phone) =>
              setValues((prev) => ({
                ...prev,
                phone,
              }))
            }
            validations={[isRequired, isPhone]}
            errors={phoneId}
            setErrors={setErrors}
          />
        </div>

        <div>
          <button
            disabled={!formIsValid()}
            onClick={registerAccount}
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
  );
}
