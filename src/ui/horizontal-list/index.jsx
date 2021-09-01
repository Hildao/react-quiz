export default function HorizontalList({
  items = [],
  renderItem = () => {},
}) {
  return (
    <ul className='flex space-x-4'>
      {items.map((item) => (
        <li>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
