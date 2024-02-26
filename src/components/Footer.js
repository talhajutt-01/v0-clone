import React from 'react';

function Footer() {
  return (
    <footer className="fixed  inline-flex items-center mix-blend-difference justify-between bottom-0 right-0 px-4 pt-1 z-50 pb-2 ">
      <nav className="flex items-center gap-2.5 text-xs font-medium rounded-full">
        <a className="  text-white hover:text-gray-700" id="fides-modal-link">Cookies</a>
        <button className="inline-flex items-center whitespace-nowrap shrink-0 justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-8 rounded-full sm:hidden text-white bg-transparent mix-blend-difference gap-[6px] p-0 text-xs" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R4t3jtta:" data-state="closed">Feedback</button>
        <a className="font-black mix-blend-difference hover:text-gray-700" href="/faq">FAQ</a>
        <a className="font-black hover:text-gray-700" href="/agreement">Terms</a>
        <a className="font-black hover:text-gray-700" href="/policy">
          <span className="font-black sm:hidden">Policy</span>
          <span className="font-black hidden sm:inline">AI Policy</span>
        </a>
        <a href="https://vercel.com/legal/privacy-policy" className="hover:text-gray-700 font-black" target="_blank">Privacy</a>
        <a href="https://vercel.com/?utm_source=v0-site&utm_medium=banner&utm_campaign=home" target="_blank" className="flex items-center justify-center w-6 h-6">
          <span className="sr-only font-black ">Vercel</span>
          <svg aria-label="Vercel logomark" role="img" viewBox="0 0 74 64" className="h-4 w-4">
            <path d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z" fill="currentColor"></path>
          </svg>
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
