
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import React, { useState } from 'react'

import metadata from './vakaMetadata'

const options = metadata.variables[1].valueTexts
const values = metadata.variables[1].values

export default function AreaSelection({onSelect}) {
  const [inputValue, setInputValue] = useState('')

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  )

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button>Valitse alue</button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="dropdown-content">
        <input
          type="text"
          placeholder="Hae kuntaa nimellä..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ margin: '0.5rem', padding: '0.5rem' }}
        />
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option, i) => (
            <DropdownMenu.Item
              key={i}
              onSelect={() => {
                const index = options.findIndex( val => val === option)
                onSelect(values[index], option)
                setInputValue('')
              }}
            >
              {option}
            </DropdownMenu.Item>
          ))
        ) : (
          <DropdownMenu.Item disabled>Kuntaa ei löytynyt</DropdownMenu.Item>
        )}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
