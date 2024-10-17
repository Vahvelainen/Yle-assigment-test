import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React, { useState } from 'react';
import metadata from './vakaMetadata';
import './AreaSelection.css';

const options = metadata.variables[1].valueTexts;
const values = metadata.variables[1].values;

export default function AreaSelection({ onSelect }) {
  const [inputValue, setInputValue] = useState('');

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="dropdown-trigger">Valitse alue</button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="DropdownMenuContent">
        <DropdownMenu.Arrow className="DropdownMenuArrow" />
        <input
          type="text"
          placeholder="Hae kuntaa nimellä..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="DropdownMenuInput"
        />
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option, i) => (
            <DropdownMenu.Item
              key={i}
              onSelect={() => {
                const index = options.findIndex(val => val === option);
                onSelect(values[index], option);
                setInputValue('');
              }}
              className="DropdownMenuItem"
            >
              {option}
            </DropdownMenu.Item>
          ))
        ) : (
          <DropdownMenu.Item disabled className="DropdownMenuItem disabled">
            Kuntaa ei löytynyt
          </DropdownMenu.Item>
        )}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
