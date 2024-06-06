import React from 'react';
import './style.css';
import { Collection } from './Collection';
import myData from './data.json';

const categories = ['All', 'Sea', 'Mountain', 'Culture', 'City'];

interface ICollection {
  category: string;
  name: string;
  photos: string[];
}

export const Gallery: React.FC = () => {
  const [collections, setCollections] = React.useState<ICollection[]>([]);
  const [category, setCategory] = React.useState<string>('All');
  const [searchValue, setSearchValue] = React.useState<string>('');

  React.useEffect(() => {
    setCollections([...myData]);
  }, []);

  return (
    <div className="gallery-countainer">
      <h1>My Gallery</h1>
      <div className="gallery-countainer__header">
        {categories.map((n, i) => (
          <button
            key={i}
            onClick={() => setCategory(n)}
            className={category === n ? 'active' : ''}>
            {n}
          </button>
        ))}
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="gallery-countainer__section">
        {collections
          .filter(
            (collection: ICollection) =>
              category === categories[0] || category === collection.category
          )
          .filter((collection: ICollection) =>
            collection.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((collection: ICollection, index) => (
            <Collection
              key={index}
              name={collection.name}
              images={collection.photos}
            />
          ))}
      </div>
    </div>
  );
};
