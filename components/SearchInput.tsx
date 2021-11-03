import { useState } from 'react';
export const SearchInput = () => {
  const [input, setInput] = useState('');
  return (
    <input
      className="rounded-3xl ml-4 focus:outline-none text-black w-full"
      placeholder="Search..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};
