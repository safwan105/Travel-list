import { useState } from 'react';
import { Item } from './Item';

export function PackList({ items, onDeleteItems, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortItem;

  if (sortBy === "input") sortItem = items;

  if (sortBy === "description") sortItem = items.slice().sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed") sortItem = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortItem.map((item) => <Item
          key={item.id}
          item={item}
          onDeleteItems={onDeleteItems}
          onToggleItem={onToggleItem} />
        )}
      </ul>

      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input Order </option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed Status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>

  );
}
