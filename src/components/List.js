import React, { useState, useEffect } from 'react';
import itemData from './data/itemData';

const List = () => {
  const [activeTab, setActiveTab] = useState('newGenerations');
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Set items from the imported array
    setItems(itemData);
  }, []);

  const filteredItems = items.filter(item => {
    if (activeTab === 'newGenerations') {
      return item.category === 'New Generations';
    } else if (activeTab === 'featured') {
      return item.category === 'Featured';
    }
    return true;
  });

  return (
    <div className="flex flex-col px-6 max-w-7xl mx-auto pb-20">
      <section className="grid gap-4">
        <h2 className="sr-only">Explore</h2>
        <div className="grid gap-6">
          <div
            role="tablist"
            aria-orientation="horizontal"
            className="flex items-center gap-2"
            aria-label="Sort Explore"
            tabIndex="0"
            style={{ outline: 'none' }}
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'newGenerations'}
              onClick={() => setActiveTab('newGenerations')}
              className={`inline-flex items-center h-8 justify-center whitespace-nowrap text-gray-500 rounded-full px-3 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 hover:text-[#171717] ${
                activeTab === 'newGenerations' ? 'bg-gray-100 text-[#171717]' : ''
              }`}
            >
              New Generations
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'featured'}
              onClick={() => setActiveTab('featured')}
              className={`inline-flex items-center h-8 justify-center whitespace-nowrap text-gray-500 rounded-full px-3 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 hover:text-[#171717] ${
                activeTab === 'featured' ? 'bg-gray-100 text-[#171717]' : ''
              }`}
            >
              Featured
            </button>
          </div>
        </div>
      </section>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredItems.map(item => (
          <li key={item.id} className="space-y-4 w-full" data-area="result-preview">
            <div className="w-full block relative aspect-preview group rounded-lg border border-gray-200 shadow hover:shadow-lg overflow-hidden transition-all">
              <p className="absolute top-2 md:top-1 right-2 md:right-1 z-10 bg-gray-100 bg-opacity/80 px-2 md:px-1 py-1 md:py-0.5 rounded-sm text-xs md:text-xxs font-medium text-gray-700">
                {item.timestamp}
              </p>
              <a aria-label="View template" className="flex h-full items-center" draggable="false" href={item.link}>
                <img src={item.imageSrc} alt={item.imageAlt} className="object-top object-cover" loading="eager" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" aria-hidden="true" draggable="false" />
              </a>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <a className="flex-none" href={item.userLink}>
                  <span className="sr-only">Link to {item.username}'s v0.dev Profile</span>
                  <img alt="" width="32" height="32" className="rounded-full shrink-0 select-none" loading="eager" src={item.userAvatar} />
                </a>
                <button className="relative group max-w-[70%] flex items-center" title={item.templateTitle} data-state="closed">
                  <div className="inline-flex flex-1 relative py-1 px-3 rounded-2xl bg-[#ebebeb] min-w-0 w-full">
                    <span className="text-sm text-left line-clamp-1 text-ellipsis">{item.templateTitle}</span>
                    <svg className="absolute" width="13" height="14" fill="none" style={{ left: '-5.5px', bottom: '0.246px' }}>
                      <path className="fill-[#ebebeb]" d="M6 .246c-.175 5.992-1.539 8.89-5.5 13.5 6.117.073 9.128-.306 12.5-3L6 .246Z"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
