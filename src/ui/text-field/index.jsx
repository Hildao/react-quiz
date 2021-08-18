import { useState } from 'react';

export default function TextField({
  type = 'text',
  label,
  name,
  placeholder,
  value,
  onChange,
  validations,
  errors,
  setErrors,
}) {
  const [isFocused, setIsFocused] = useState(false);

  const id = label
    .toLowerCase()
    .split(' ')
    .map((word) => word.replace(/[^a-z]+/g, ''))
    .join('-');

  const activeColor = 'purple-500';

  function validate(validations) {
    setErrors((prev) => ({
      ...prev,
      [name]: validations
        .map((errorsFor) => errorsFor(value))
        .filter((errorMsg) => errorMsg.length > 0),
    }));
  }

  return (
    <>
      <div className='mr-2'>
        <div>
          <label
            className={`ml-1 ${
              isFocused ? `text-${activeColor}` : ''
            }`}
            htmlFor={id}
          >
            {label}
          </label>
        </div>
        <input
          className={`border p-2 w-full focus:border-${activeColor} focus: text-${activeColor}`}
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            validate(validations);
          }}
        />
      </div>
      {errors.length > 0 ? (
        <div className='mx-2 text-right text-red-400'>
          {errors.join(', ')}
        </div>
      ) : null}
    </>
  );
}
