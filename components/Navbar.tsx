import SearchBar from './SearchBar';

export const Navbar = () => {
  return (
    <div className="h-16 bg-gray-100 flex items-center justify-center">
      <header>
        <SearchBar />
      </header>
    </div>
  );
};
