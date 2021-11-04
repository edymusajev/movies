import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';

interface SearchBarProps {
  formStyle?: string;
  inputStyle?: string;
  buttonStyle?: string;
  button?: boolean;
  buttonText?: string;
  placeholder?: string;
}

export const SearchBar = ({
  formStyle,
  inputStyle,
  buttonStyle,
  button,
  buttonText,
  placeholder,
}: SearchBarProps) => {
  const [input, setInput] = useState('');
  const router = useRouter();
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    router.push(`/search?query=${input}`, undefined, { shallow: false });
  };
  return (
    <form className={formStyle} onSubmit={handleSubmit}>
      <input
        placeholder={placeholder}
        className={inputStyle}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {button && <button className={buttonStyle}>{buttonText ? buttonText : 'Search'}</button>}
    </form>
  );
};

export default SearchBar;
