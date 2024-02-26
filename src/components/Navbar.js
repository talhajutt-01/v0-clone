import React, { useState } from 'react';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header className="sticky top-0 z-20 w-full flex flex-col md:flex-row md:items-center gap-3 p-3 lg:px-4 md:h-16 supports-[backdrop-filter]:bg-white/60 bg-white/95 backdrop-blur">
            <div className="flex items-center w-full gap-8">
                <div className="flex items-center gap-2">
                    <a className="rounded focus-visible:bg-zinc-200 focus:ring-0 focus:outline-0" href="/">
                        <span className="sr-only">Home</span>
                        <svg width="40" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pink">
                            <path d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z" fill="currentColor"></path>
                            <path d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z" fill="currentColor"></path>
                        </svg>
                    </a>
                </div>
                <div className="flex items-center gap-2 ml-auto">
                    <button className="items-center  bg-zinc-100 whitespace-nowrap shrink-0 justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-8 px-3 py-2 rounded-full gap-[6px] hidden sm:flex" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R753jtta:" data-state="closed">Feedback</button>
                    <div className="flex items-center text-center text-xs px-3 font-medium bg-zinc-200 rounded-full h-8">Beta</div>
                    <button onClick={toggleMenu} className="inline-flex items-center whitespace-nowrap justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900 w-8 h-8 border rounded-full shrink-0" id="menu-trigger-button" type="button" aria-haspopup="menu" aria-expanded={menuOpen ? 'true' : 'false'}
                        data-state={menuOpen ? 'open' : 'closed'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"></path>
                        </svg>
                        <span className="sr-only">Toggle Menu</span>
                    </button>
                </div>
            </div>
            {menuOpen && (
  <div style={{ position: 'fixed', left: '0px', top: '0px', transform: 'translate(1077px, 52px)', minWidth: 'max-content', zIndex: 50 }}>
    <div role="menu" aria-orientation="vertical" className="z-50 min-w-[16rem] overflow-hidden rounded-xl bg-white origin-top-right border border-gray-300 shadow-lg" tabIndex="-1">
    <div className="p-2">
        <button role="menuitem" tabIndex="-1" className="relative  select-none items-center rounded-md outline-none px-2 py-2.5 text-sm transition-colors focus:bg-zinc-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 flex gap-3 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className="h-4 w-4"><path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Z"></path></svg>
          <span>Login</span>
        </button>
      </div>
      <div role="separator" aria-orientation="horizontal" className="bg-gray-300 h-px"></div>
      <div className="p-2">
        <a role="menuitem" tabIndex="-1" className="relative flex select-none rounded-md outline-none px-2 py-2.5 text-sm transition-colors focus:bg-zinc-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 gap-3 items-center" href="/explore">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.5 6.5V2.5H5.5V6.5H2.5ZM1 2C1 1.44772 1.44772 1 2 1H6C6.55228 1 7 1.44772 7 2V7C7 7.55228 6.55228 8 6 8H2C1.44772 8 1 7.55228 1 7V2ZM2.5 13.5V11.5H5.5V13.5H2.5ZM1 11C1 10.4477 1.44772 10 2 10H6C6.55228 10 7 10.4477 7 11V14C7 14.5523 6.55228 15 6 15H2C1.44772 15 1 14.5523 1 14V11ZM10.5 2.5V4.5H13.5V2.5H10.5ZM10 1C9.44772 1 9 1.44772 9 2V5C9 5.55228 9.44772 6 10 6H14C14.5523 6 15 5.55228 15 5V2C15 1.44772 14.5523 1 14 1H10ZM13.5 13.5H10.5V9.5H13.5V13.5ZM9 9C9 8.44772 9.44772 8 10 8H14C14.5523 8 15 8.44772 15 9V14C15 14.5523 14.5523 15 14 15H10C9.44772 15 9 14.5523 9 14V9Z" fill="#666666" />
          </svg>
          <span>Explore</span>
        </a>
        <a role="menuitem" tabIndex="-1" className="relative flex select-none rounded-md outline-none px-2 py-2.5 text-sm transition-colors focus:bg-zinc-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 gap-3 items-center" href="/faq">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM9 11C9 11.5523 8.55229 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55229 10 9 10.4477 9 11ZM7.09584 5.82182C7.25716 5.48223 7.6022 5.25 7.99999 5.25C8.55227 5.25 8.99999 5.69772 8.99999 6.25C8.99999 6.75329 8.62748 7.17086 8.14337 7.23989C7.70367 7.3026 7.24999 7.67511 7.24999 8.25V8.5V9.25H8.74999V8.63535C9.76443 8.31661 10.5 7.36971 10.5 6.25C10.5 4.86929 9.3807 3.75 7.99999 3.75C7.00158 3.75 6.14136 4.3353 5.74095 5.17818L5.41913 5.85563L6.77402 6.49926L7.09584 5.82182Z" fill="#666666" />
          </svg>
          <span>FAQs</span>
        </a>
        <a role="menuitem" tabIndex="-1" className="relative flex select-none rounded-md outline-none px-2 py-2.5 text-sm transition-colors focus:bg-zinc-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 gap-3 items-center" href="/pricing">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_751_2759)"><path fillRule="evenodd" clipRule="evenodd" d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.62499 3.375V4V4.375H9C10.1736 4.375 11.125 5.3264 11.125 6.5H9.875C9.875 6.01675 9.48325 5.625 9 5.625H8.62499V7.375H9C10.1736 7.375 11.125 8.3264 11.125 9.5C11.125 10.6736 10.1736 11.625 9 11.625H8.62499V12V12.625H7.37499V12V11.625H7C5.8264 11.625 4.875 10.6736 4.875 9.5H6.125C6.125 9.98325 6.51675 10.375 7 10.375H7.37499V8.625H7C5.8264 8.625 4.875 7.6736 4.875 6.5C4.875 5.3264 5.8264 4.375 7 4.375H7.37499V4V3.375H8.62499ZM7.37499 5.625H7C6.51675 5.625 6.125 6.01675 6.125 6.5C6.125 6.98325 6.51675 7.375 7 7.375H7.37499V5.625ZM8.62499 8.625V10.375H9C9.48325 10.375 9.875 9.98325 9.875 9.5C9.875 9.01675 9.48325 8.625 9 8.625H8.62499Z" fill="#666666"></path></g><defs><clipPath id="clip0_751_2759"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>
          <span>Pricing</span>
        </a>
        <a role="menuitem" tabIndex="-1" className="relative flex select-none rounded-md outline-none px-2 py-2.5 text-sm transition-colors focus:bg-zinc-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 gap-3 items-center" href="https://vercel.com">
          <svg height="22" viewBox="0 0 235 203" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Vercel Logo" className="h-4 w-4 dark:fill-white fill-black"><path d="M117.082 0L234.164 202.794H0L117.082 0Z" fill="currentColor"></path></svg>
          <span>Vercel</span>
        </a>
      </div>
    </div>
  </div>
)}


        </header >
    );
};

export default Navbar;
