export default function TextField({
  type = 'text',
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      className='border p-2 w-full'
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
