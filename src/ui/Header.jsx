import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <div className="flex flex-col items-center">
        <Link to="/" className="tracking-widest text-2xl font-bold">
          Dine Delight
        </Link>
        <span className="text-sm font-medium">Your Delightful Dining Destination</span>
      </div>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
