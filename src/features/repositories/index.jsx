import OverviewIcon from '@/ui/icons/overview';
import RepositoriesIcon from '@/ui/icons/repositories';
import HorizontalList from '@/ui/horizontal-list';

const menuItem = [
  {
    icon: <OverviewIcon />,
    label: 'Overview',
  },
  {
    icon: <RepositoriesIcon />,
    label: 'Repositories',
  },
];

export default function Repositories({}) {
  return (
    <div className='border-b border-gray-500 pb-4'>
      <div className='container mx-auto mt-8'>
        <HorizontalList
          items={menuItem}
          renderItem={(item) => (
            <div className='flex items-center space-x-2 text-gray-500'>
              {item.icon}
              <div>{item.label}</div>
            </div>
          )}
        />
      </div>
    </div>
  );
}
