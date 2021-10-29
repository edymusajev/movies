import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';

export const SearchBar = () => {
  const [input, setInput] = useState('');
  const router = useRouter();
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    router.push(`/search?query=${input}`, undefined, { shallow: false });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border rounded outline-none px-3 py-2 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
