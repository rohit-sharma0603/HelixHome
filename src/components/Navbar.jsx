import React, { useState } from 'react'
function Navbar() {
  const [isLearnDropdownOpen, setisLearnDropdownOpen] = useState(false)

  return (
    <>
      <nav className="bg-[#f3ecec] shadow-md sticky top-0 w-full z-40">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <a to="/">
              <h1 className="text-2xl font-bold text-gray-800 mr-5">HELIX-HOME</h1>
            </a>

            {/* Navigation as */}
            <div className="hidden md:flex space-x-9 items-center">
              <button
                onClick={() => {
                  setisLearnDropdownOpen(!isLearnDropdownOpen)
                }}
                className="text-black font-semibold"
              >
                Learn{' '}
                <span className="text-sm">
                  {isLearnDropdownOpen ? '▲' : '▼'}
                </span>
              </button>
              <a to="/catalog" className="text-black font-semibold">
                Catalog
              </a>
              <a to="/business" className="text-black font-semibold">
                Business <span className="text-sm">▼</span>
              </a>
              <a to="/government" className="text-black font-semibold">
                Government
              </a>
              <a to="/outcomes" className="text-black font-semibold">
                Outcomes
              </a>
            </div>
          </div>

          {/* Search and Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-black font-semibold">
              Search
            </button>
            <a
              to="/login"
              className="text-blue-600 border border-blue-600 rounded px-4 py-2 hover:bg-blue-600 hover:text-white"
            >
              Log In
            </a>
            <a
              to="/join"
              className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
            >
              Join for Free
            </a>
          </div>
        </div>
      </nav>
      {isLearnDropdownOpen && (
        <div className="learn-dropdown fixed top-16 left-20 bg-white shadow-lg rounded p-4 w-[90vw] z-50">
          <div className="relative">
            <div
              className="absolute -top-6 left-10 w-6 h-6 bg-white rotate-45 transform -translate-y-1/2"
              style={{ boxShadow: '-1px -1px 0px 0 rgba(0,0,0,0.1)' }}
            ></div>
            <div className="mt-2 px-16">
              <nav className="flex justify-between">
                <ul>
                  <li className="font-bold my-4">Schools</li>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>

                    {/* Add other list items similarly */}
                  </ul>
                </ul>
                <ul>
                  <li className="font-bold my-4">Schools</li>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>

                    {/* Add other list items similarly */}
                  </ul>
                </ul>
                <ul>
                  <li className="font-bold my-4">Schools</li>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udacity.com/school/artificial-intelligence"
                        className="flex items-center space-x-2 hover:underline"
                      >
                        <img
                          src="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
                          className="w-8 h-8"
                          alt="AI"
                        />
                        <span>Artificial Intelligence</span>
                      </a>
                    </li>

                    {/* Add other list items similarly */}
                  </ul>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
