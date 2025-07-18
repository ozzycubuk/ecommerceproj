import React from "react";

function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-transparent z-50 ">
        <div className="max-w-7xl mx-[10vw] px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="text-3xl font-bold tracking-tight text-white flex-shrink-0">
            <a href="/">adrianred</a>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="/" className="text-white font-bold">
              Home
            </a>
            <div className="relative group">
              <button className="text-white font-bold flex items-center gap-1 focus:outline-none">
                Shop
                <svg
                  className="w-4 h-4 transform transition-transform duration-200 group-hover:rotate-180 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-40 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  All Products
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Men
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Women
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Sale
                </a>
              </div>
            </div>
            <a href="#" className="text-white font-bold">
              About
            </a>
            <a href="#" className="text-white font-bold">
              Blog
            </a>
            <a href="#" className="text-white font-bold">
              Contact
            </a>
            <a href="#" className="text-white font-bold">
              Pages
            </a>
          </nav>
          <button
            className="md:hidden text-white focus:outline-none"
            title="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1={3} y1={12} x2={21} y2={12}></line>
              <line x1={3} y1={6} x2={21} y2={6}></line>
              <line x1={3} y1={18} x2={21} y2={18}></line>
            </svg>
          </button>
          <div className="hidden md:flex items-center gap-4">
            <button
              className="flex items-center gap-2 text-white hover:text-gray-300"
              title="User Account"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user w-5 h-5"
                aria-hidden="true"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx={12} cy={7} r={4}></circle>
              </svg>
              <span className="text-sm font-sm font-bold">Login / Register</span>
            </button>
            <button className="text-white hover:text-gray-300" title="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search w-5 h-5"
                aria-hidden="true"
              >
                <path d="m21 21-4.34-4.34"></path>
                <circle cx={11} cy={11} r={8}></circle>
              </svg>
            </button>
            <button
              className="flex relative text-white hover:text-gray-300"
              title="Shopping Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shopping-cart w-5 h-5"
                aria-hidden="true"
              >
                <circle cx={8} cy={21} r={1}></circle>
                <circle cx={19} cy={21} r={1}></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
              <span className="ml-3 b-1">3</span>
            </button>
            <button
              className="flex relative text-white hover:text-gray-300"
              title="Shopping Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart w-5 h-5"
                aria-hidden="true"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
              <span className="ml-3 b-1">3</span>
            </button>
          </div>
        </div>
      </header>
      <div className="page-content">
        <main>
          <div className="w-full h-screen relative">
            <div className="slick-slider h-screen slick-initialized" dir="ltr">
              <button
                data-role="none"
                className="slick-arrow slick-prev !left-8 !z-10 bg-white bg-opacity-80 hover:bg-blue-500 hover:text-white text-black rounded-full shadow-lg p-2 flex items-center justify-center"
                currentslide={1}
                slidecount={2}
                aria-label="Previous"
                style={{ display: "block" }}
              >
                <svg
                  width={24}
                  height={24}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 6l-6 6 6 6"></path>
                </svg>
              </button>
              <div className="slick-list">
                <div
                  className="slick-track"
                  style={{
                    width: 9155,
                    opacity: 1,
                    transform: "translate3d(-3662px, 0px, 0px)"
                  }}
                >
                  <div
                    data-index={-1}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: 1831 }}
                  >
                    <div>
                      <div
                        className="w-full h-screen relative"
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="w-full h-screen flex items-center justify-start relative"
                          role="main"
                          style={{
                            backgroundImage:
                              'url("https://picsum.photos/id/1025/1920/1080")',
                            backgroundSize: "cover",
                            backgroundPosition: "60% center",
                            backgroundRepeat: "no-repeat"
                          }}
                        >
                          <div className="absolute inset-0 bg-black bg-opacity-0 z-0"></div>
                          <div className="relative z-10 flex flex-col justify-center items-center px-8 py-12 md:py-0 md:pl-16 max-w-xl text-center">
                            <h2 className="text-lg font-bold text-white mb-2">
                              SUMMER 2020
                            </h2>
                            <h1 className="text-5xl font-extrabold text-white mb-4">
                              IT’S A SPECIAL GIFT
                            </h1>
                            <p className="text-white mb-6">
                              We know how large objects will act, but things on a
                              small scale
                            </p>
                            <button className="bg-blue-500 text-white font-bold px-6 py-3 rounded hover:bg-blue-600 transition">
                              SHOP NOW
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={0}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: 1831 }}
                  >
                    <div>
                      <div
                        className="w-full h-screen relative"
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="w-full h-screen flex items-center justify-start relative"
                          role="main"
                          style={{
                            backgroundImage:
                              'url("/assets/background-D1jFaD0l.png")',
                            backgroundSize: "cover",
                            backgroundPosition: "60% center",
                            backgroundRepeat: "no-repeat"
                          }}
                        >
                          <div className="absolute inset-0 bg-black bg-opacity-0 z-0"></div>
                          <div className="relative z-10 flex flex-col justify-center items-center px-8 py-12 md:py-0 md:pl-16 max-w-xl text-center">
                            <h2 className="text-lg font-bold text-white mb-2">
                              SUMMER 2020
                            </h2>
                            <h1 className="text-5xl font-extrabold text-white mb-4">
                              IT’S A SPECIAL GIFT
                            </h1>
                            <p className="text-white mb-6">
                              We know how large objects will act, but things on a
                              small scale
                            </p>
                            <button className="bg-blue-500 text-white font-bold px-6 py-3 rounded hover:bg-blue-600 transition">
                              SHOP NOW
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={1}
                    className="slick-slide slick-active slick-current"
                    tabIndex={-1}
                    aria-hidden="false"
                    style={{ outline: "none", width: 1831 }}
                  >
                    <div>
                      <div
                        className="w-full h-screen relative"
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="w-full h-screen flex items-center justify-start relative"
                          role="main"
                          style={{
                            backgroundImage:
                              'url("https://picsum.photos/id/1025/1920/1080")',
                            backgroundSize: "cover",
                            backgroundPosition: "60% center",
                            backgroundRepeat: "no-repeat"
                          }}
                        >
                          <div className="absolute inset-0 bg-black bg-opacity-0 z-0"></div>
                          <div className="relative z-10 flex flex-col justify-center items-center px-8 py-12 md:py-0 md:pl-16 max-w-xl text-center">
                            <h2 className="text-lg font-bold text-white mb-2">
                              SUMMER 2020
                            </h2>
                            <h1 className="text-5xl font-extrabold text-white mb-4">
                              IT’S A SPECIAL GIFT
                            </h1>
                            <p className="text-white mb-6">
                              We know how large objects will act, but things on a
                              small scale
                            </p>
                            <button className="bg-blue-500 text-white font-bold px-6 py-3 rounded hover:bg-blue-600 transition">
                              SHOP NOW
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={2}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: 1831 }}
                  >
                    <div>
                      <div
                        className="w-full h-screen relative"
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="w-full h-screen flex items-center justify-start relative"
                          role="main"
                          style={{
                            backgroundImage:
                              'url("/assets/background-D1jFaD0l.png")',
                            backgroundSize: "cover",
                            backgroundPosition: "60% center",
                            backgroundRepeat: "no-repeat"
                          }}
                        >
                          <div className="absolute inset-0 bg-black bg-opacity-0 z-0"></div>
                          <div className="relative z-10 flex flex-col justify-center items-center px-8 py-12 md:py-0 md:pl-16 max-w-xl text-center">
                            <h2 className="text-lg font-bold text-white mb-2">
                              SUMMER 2020
                            </h2>
                            <h1 className="text-5xl font-extrabold text-white mb-4">
                              IT’S A SPECIAL GIFT
                            </h1>
                            <p className="text-white mb-6">
                              We know how large objects will act, but things on a
                              small scale
                            </p>
                            <button className="bg-blue-500 text-white font-bold px-6 py-3 rounded hover:bg-blue-600 transition">
                              SHOP NOW
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={3}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: 1831 }}
                  >
                    <div>
                      <div
                        className="w-full h-screen relative"
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="w-full h-screen flex items-center justify-start relative"
                          role="main"
                          style={{
                            backgroundImage:
                              'url("https://picsum.photos/id/1025/1920/1080")',
                            backgroundSize: "cover",
                            backgroundPosition: "60% center",
                            backgroundRepeat: "no-repeat"
                          }}
                        >
                          <div className="absolute inset-0 bg-black bg-opacity-0 z-0"></div>
                          <div className="relative z-10 flex flex-col justify-center items-center px-8 py-12 md:py-0 md:pl-16 max-w-xl text-center">
                            <h2 className="text-lg font-bold text-white mb-2">
                              SUMMER 2020
                            </h2>
                            <h1 className="text-5xl font-extrabold text-white mb-4">
                              IT’S A SPECIAL GIFT
                            </h1>
                            <p className="text-white mb-6">
                              We know how large objects will act, but things on a
                              small scale
                            </p>
                            <button className="bg-blue-500 text-white font-bold px-6 py-3 rounded hover:bg-blue-600 transition">
                              SHOP NOW
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                data-role="none"
                className="slick-arrow slick-next !right-8 !z-10 bg-white bg-opacity-80 hover:bg-blue-500 hover:text-white text-black rounded-full shadow-lg p-2 flex items-center justify-center"
                currentslide={1}
                slidecount={2}
                aria-label="Next"
                style={{ display: "block" }}
              >
                <svg
                  width={24}
                  height={24}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6"></path>
                </svg>
              </button>
            </div>
          </div>
          <section className="py-12">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 tracking-tight">
                EDITOR’S PICK
              </h2>
              <p className="text-gray-500">
                Problems trying to resolve the conflict between
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-5xl mx-auto">
              <div className="flex-1 flex flex-col hover:scale-105 hover:shadow-lg transition-transform duration-300">
                <div className="relative h-[350px] md:h-[400px] w-full overflow-hidden rounded-lg ">
                  <span className="absolute bottom-6 left-6 bg-white px-6 py-2 font-bold text-lg rounded shadow">
                    MEN
                  </span>
                </div>
              </div>
              <div className="flex-[1.2] grid grid-cols-2 grid-rows-2 gap-6 min-w-[300px] ">
                <div className="relative h-[190px] w-full overflow-hidden rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300">
                  <span className="absolute bottom-6 left-6 bg-white px-6 py-2 font-bold text-lg rounded shadow">
                    WOMEN
                  </span>
                </div>
                <div className="relative h-[190px] w-full overflow-hidden rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300">
                  <span className="absolute bottom-6 left-6 bg-white px-6 py-2 font-bold text-lg rounded shadow">
                    ACCESSORIES
                  </span>
                </div>
                <div className="relative h-[190px] w-full overflow-hidden rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300">
                  <span className="absolute bottom-6 left-6 bg-white px-6 py-2 font-bold text-lg rounded shadow">
                    KIDS
                  </span>
                </div>
                <div className="relative h-[190px] w-full overflow-hidden rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300">
                  <span className="absolute bottom-6 left-6 bg-white px-6 py-2 font-bold text-lg rounded shadow">
                    ACCESSORIES
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="py-12">
            <div className="text-center mb-6">
              <div className="text-gray-500 text-lg mb-1">Featured Products</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                BESTSELLER PRODUCTS
              </h2>
              <div className="text-gray-400 text-sm">
                Problems trying to resolve the conflict between
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="flex flex-col items-center p-4">
                <img
                  alt="Graphic Design"
                  className="w-48 h-64 object-cover rounded-lg mb-4"
                  src="/assets/graphic-design.png"
                />
                <div className="font-semibold text-base">Graphic Design</div>
                <div className="text-sm text-gray-500 mb-1">
                  English Department
                </div>
                <div className="mb-2">
                  <span className="text-gray-400 line-through mr-2">$16.4B</span>
                  <span className="text-green-600 font-bold">$6.48</span>
                </div>
                <div className="flex gap-2">
                  <span
                    className="w-4 h-4 rounded-full border border-gray-200"
                    style={{ backgroundColor: "rgb(0, 191, 255)" }}
                  ></span>
                  <span
                    className="w-4 h-4 rounded-full border border-gray-200"
                    style={{ backgroundColor: "rgb(0, 206, 209)" }}
                  ></span>
                  <span
                    className="w-4 h-4 rounded-full border border-gray-200"
                    style={{ backgroundColor: "rgb(255, 99, 71)" }}
                  ></span>
                  <span
                    className="w-4 h-4 rounded-full border border-gray-200"
                    style={{ backgroundColor: "rgb(255, 215, 0)" }}
                  ></span>
                </div>
              </div>
              <div className="flex flex-col items-center p-4">
                <img
                  alt="Graphic Design"
                  className="w-48 h-64 object-cover rounded-lg mb-4"
                  src="/assets/graphic-design.png"
                />
                <div className="font-semibold text-base">Graphic Design</div>
                <div className="text-sm text-gray-500 mb-1">
                  English Department
                </div>
                <div className="mb-2">
                  <span className="text-gray-400 line-through mr-2">$16.4B</span>
                  <span className="text-green-600 font-bold">$6.48</span>
                </div>
                <div className="flex gap-2">
                  <span
                    className="w-4 h-4 rounded-full border border-gray-200"
                    style={{ backgroundColor: "rgb(0, 191, 255)" }}
                  ></span>
                  <span
                    className="w-4 h-4 rounded-full border border-gray-200"
                    style={{ backgroundColor: "rgb(0, 206, 209)" }}
                  ></span>
                  <span
                    className="w-4 h-4 rounded-full border border-gray-200"
                    style={{ backgroundColor: "rgb(255, 99, 71)" }}
                  ></span>
                  <span
                    className="w-4 h-4 rounded-full border border-gray-200"
                    style={{ backgroundColor: "rgb(255, 215, 0)" }}
                  ></span>
                </div>
              </div>
              <div className="flex flex-col items-center p-4">
                <img
                  alt="Graphic Design"
                  className="w-48 h-64 object-cover rounded-lg mb-4"
                  src="/assets/graphic-design.png"
                />
                <div className="font-semibold text-base">Graphic Design</div>
                <div className="text-sm text-gray-500 mb-1">
                  English Department
                </div>
                <div className="mb-2">
                  <span className="text-gray-400 line-through mr-2">$16.4B</span>
                  <span className="text-green-600 font-bold">$6.48</span>
                </div>
                <div className="flex gap-2">
                  <span
                    className="w-4 h-4 rounded-full border border-gray-200"
                    style={{ backgroundColor: "rgb(0, 191, 255)" }}
                  ></span>
                  <span
                    className="w-4 h-4 rounded-full border border-gray-200"
                    style={{ backgroundColor: "rgb(0, 206, 209)" }}
                  ></span>
                  <span
                    className="w-4 h-4 rounded-full border border-gray-200"
                    style={{ backgroundColor: "rgb(255, 99, 71)" }}
                  ></span>
                  <span
                    className="w-4 h-4 rounded-full border border-gray-200"
                    style={{ backgroundColor: "rgb(255, 215, 0)" }}
                  ></span>
                </div>
              </div>
              <div className="flex flex-col items-center p-4">
                <img
                  alt="Graphic Design"
                  className="w-48 h-64 object-cover rounded-lg mb-4"
                  src="/assets/graphic-design.png"
                />
                <div className="font-semibold text-base">Graphic Design</div>
                <div className="text-sm text-gray-500 mb-1">
                  English Department
                </div>
                <div className="mb-2">
                  <span className="text-gray-400 line-through mr-2">$16.4B</span>
                  <span className="text-green-600 font-bold">$6.48</span>
                </div>
                <div className="flex gap-2">
                  <span
                    className="w-4 h-4 rounded-full border border-gray-200"
                    style={{ backgroundColor: "rgb(0, 191, 255)" }}
                  ></span>
                  <span
                    className="w-4 h-4 rounded-full border border-gray-200"
                    style={{ backgroundColor: "rgb(0, 206, 209)" }}
                  ></span>
                  <span
                    className="w-4 h-4 rounded-full border border-gray-200"
                    style={{ backgroundColor: "rgb(255, 99, 71)" }}
                  ></span>
                  <span
                    className="w-4 h-4 rounded-full border border-gray-200"
                    style={{ backgroundColor: "rgb(255, 215, 0)" }}
                  ></span>
                </div>
              </div>
            </div>
          </section>
          <div className="w-full h-screen relative">
            <div className="slick-slider h-screen slick-initialized" dir="ltr">
              <button
                data-role="none"
                className="slick-arrow slick-prev !left-6 !z-10 bg-white bg-opacity-30 hover:bg-blue-600 hover:bg-opacity-80 text-blue-600 hover:text-white rounded-full shadow-lg p-3 flex items-center justify-center border-2 border-blue-600 transition-all duration-200"
                currentslide={1}
                slidecount={2}
                aria-label="Previous"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48
                }}
              >
                <svg
                  width={32}
                  height={32}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <polyline points="15 6 9 12 15 18"></polyline>
                </svg>
              </button>
              <div className="slick-list">
                <div
                  className="slick-track"
                  style={{
                    width: 9155,
                    opacity: 1,
                    transform: "translate3d(-3662px, 0px, 0px)"
                  }}
                >
                  <div
                    data-index={-1}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: 1831 }}
                  >
                    <div>
                      <div
                        className="w-full h-screen relative"
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="w-full h-screen flex items-center justify-start relative"
                          role="main"
                          style={{
                            backgroundImage:
                              'url("https://picsum.photos/id/10/1920/1080")',
                            backgroundSize: "cover",
                            backgroundPosition: "60% center",
                            backgroundRepeat: "no-repeat"
                          }}
                        >
                          <div className="absolute inset-0 bg-black bg-opacity-0 z-0"></div>
                          <div className="relative z-10 flex flex-col justify-center items-center px-8 py-12 md:py-0 md:pl-16 max-w-xl text-center">
                            <h2 className="text-lg font-bold text-white mb-2">
                              Summer 2020
                            </h2>
                            <h1 className="text-5xl font-semibold text-white mb-4">
                              Vita Classic Product
                            </h1>
                            <p className="text-white mb-6">
                              We know how large objects will act, but things on a
                              small scale
                            </p>
                            <div className="mt-6 flex">
                              <span className="text-white text-2xl mr-[3vw] mt-2 font-bold ">
                                $16.48
                              </span>
                              <button className="bg-green-500 text-white font-bold px-6 py-3 rounded hover:bg-blue-600 transition">
                                Add To Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={0}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: 1831 }}
                  >
                    <div>
                      <div
                        className="w-full h-screen relative"
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="w-full h-screen flex items-center justify-start relative"
                          role="main"
                          style={{
                            backgroundImage:
                              'url("https://picsum.photos/id/190/1920/1080")',
                            backgroundSize: "cover",
                            backgroundPosition: "60% center",
                            backgroundRepeat: "no-repeat"
                          }}
                        >
                          <div className="absolute inset-0 bg-black bg-opacity-0 z-0"></div>
                          <div className="relative z-10 flex flex-col justify-center items-center px-8 py-12 md:py-0 md:pl-16 max-w-xl text-center">
                            <h2 className="text-lg font-bold text-white mb-2">
                              Summer 2020
                            </h2>
                            <h1 className="text-5xl font-semibold text-white mb-4">
                              Vita Classic Product
                            </h1>
                            <p className="text-white mb-6">
                              We know how large objects will act, but things on a
                              small scale
                            </p>
                            <div className="mt-6 flex">
                              <span className="text-white text-2xl mr-[3vw] mt-2 font-bold ">
                                $16.48
                              </span>
                              <button className="bg-green-500 text-white font-bold px-6 py-3 rounded hover:bg-blue-600 transition">
                                Add To Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={1}
                    className="slick-slide slick-active slick-current"
                    tabIndex={-1}
                    aria-hidden="false"
                    style={{ outline: "none", width: 1831 }}
                  >
                    <div>
                      <div
                        className="w-full h-screen relative"
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="w-full h-screen flex items-center justify-start relative"
                          role="main"
                          style={{
                            backgroundImage:
                              'url("https://picsum.photos/id/10/1920/1080")',
                            backgroundSize: "cover",
                            backgroundPosition: "60% center",
                            backgroundRepeat: "no-repeat"
                          }}
                        >
                          <div className="absolute inset-0 bg-black bg-opacity-0 z-0"></div>
                          <div className="relative z-10 flex flex-col justify-center items-center px-8 py-12 md:py-0 md:pl-16 max-w-xl text-center">
                            <h2 className="text-lg font-bold text-white mb-2">
                              Summer 2020
                            </h2>
                            <h1 className="text-5xl font-semibold text-white mb-4">
                              Vita Classic Product
                            </h1>
                            <p className="text-white mb-6">
                              We know how large objects will act, but things on a
                              small scale
                            </p>
                            <div className="mt-6 flex">
                              <span className="text-white text-2xl mr-[3vw] mt-2 font-bold ">
                                $16.48
                              </span>
                              <button className="bg-green-500 text-white font-bold px-6 py-3 rounded hover:bg-blue-600 transition">
                                Add To Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={2}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: 1831 }}
                  >
                    <div>
                      <div
                        className="w-full h-screen relative"
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="w-full h-screen flex items-center justify-start relative"
                          role="main"
                          style={{
                            backgroundImage:
                              'url("https://picsum.photos/id/190/1920/1080")',
                            backgroundSize: "cover",
                            backgroundPosition: "60% center",
                            backgroundRepeat: "no-repeat"
                          }}
                        >
                          <div className="absolute inset-0 bg-black bg-opacity-0 z-0"></div>
                          <div className="relative z-10 flex flex-col justify-center items-center px-8 py-12 md:py-0 md:pl-16 max-w-xl text-center">
                            <h2 className="text-lg font-bold text-white mb-2">
                              Summer 2020
                            </h2>
                            <h1 className="text-5xl font-semibold text-white mb-4">
                              Vita Classic Product
                            </h1>
                            <p className="text-white mb-6">
                              We know how large objects will act, but things on a
                              small scale
                            </p>
                            <div className="mt-6 flex">
                              <span className="text-white text-2xl mr-[3vw] mt-2 font-bold ">
                                $16.48
                              </span>
                              <button className="bg-green-500 text-white font-bold px-6 py-3 rounded hover:bg-blue-600 transition">
                                Add To Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={3}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: 1831 }}
                  >
                    <div>
                      <div
                        className="w-full h-screen relative"
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="w-full h-screen flex items-center justify-start relative"
                          role="main"
                          style={{
                            backgroundImage:
                              'url("https://picsum.photos/id/10/1920/1080")',
                            backgroundSize: "cover",
                            backgroundPosition: "60% center",
                            backgroundRepeat: "no-repeat"
                          }}
                        >
                          <div className="absolute inset-0 bg-black bg-opacity-0 z-0"></div>
                          <div className="relative z-10 flex flex-col justify-center items-center px-8 py-12 md:py-0 md:pl-16 max-w-xl text-center">
                            <h2 className="text-lg font-bold text-white mb-2">
                              Summer 2020
                            </h2>
                            <h1 className="text-5xl font-semibold text-white mb-4">
                              Vita Classic Product
                            </h1>
                            <p className="text-white mb-6">
                              We know how large objects will act, but things on a
                              small scale
                            </p>
                            <div className="mt-6 flex">
                              <span className="text-white text-2xl mr-[3vw] mt-2 font-bold ">
                                $16.48
                              </span>
                              <button className="bg-green-500 text-white font-bold px-6 py-3 rounded hover:bg-blue-600 transition">
                                Add To Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                data-role="none"
                className="slick-arrow slick-next !right-2 !z-10 bg-white bg-opacity-30 hover:bg-blue-600 hover:bg-opacity-80 text-blue-600 hover:text-white rounded-full shadow-lg p-3 flex items-center justify-center border-2 border-blue-600 transition-all duration-200"
                currentslide={1}
                slidecount={2}
                aria-label="Next"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48
                }}
              >
                <svg
                  width={32}
                  height={32}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start w-full px-4  mt-10 md:py-0">
            <div className="flex flex-col justify-center items-start mt-[10vh] ml-[5vw] md:ml-8 w-full max-w-lg">
              <h2 className="text-lg md:text-xl font-normal mb-2 text-gray-400">
                SUMMER 2025
              </h2>
              <h1 className="text-2xl md:text-4xl font-bold mb-4">
                Part of the Neural Universe
              </h1>
              <div>
                <p className="text-gray-600 mb-4 text-base md:text-lg">
                  Discover the latest trends and styles for the new season.
                </p>
                <div className="flex flex-col w-[80vw] sm:flex-row items-center gap-4 ">
                  <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-700 transition w-full max-w-xs sm:w-auto sm:max-w-none sm:ml-4">
                    BUY NOW
                  </button>
                  <button className="bg-white text-green-500 border border-green-500 px-6 py-3 rounded hover:bg-green-700 hover:text-white hover:border-green-700 transition w-full max-w-xs sm:w-auto sm:max-w-none">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <section className="py-16 bg-white ">
            <div className="text-center mb-10 ">
              <div className="text-blue-500 font-semibold mb-2">
                Practice Advice
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-2">
                Featured Posts
              </h2>
              <div className="text-gray-400 text-base mb-2">
                Problems trying to resolve the conflict between
                <br />
                the two major realms of Classical physics: Newtonian mechanics
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm border flex flex-col overflow-hidden w-full max-w-xs mx-auto hover:scale-105 hover:rotate-[2deg] transition-transform duration-300  ">
                <div className="relative">
                  <img
                    alt="Post Title 1"
                    className="w-full h-48 object-cover"
                    src="https://picsum.photos/id/130/1920/1080"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-2 text-xs text-gray-400 flex gap-2">
                    <span className="text-blue-500">Google</span>
                    <span>Trending</span>
                    <span>New</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 leading-tight">
                    Post Title 1
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1">
                    Description for post 1
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 inline-block"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <circle cx={12} cy={12} r={10}></circle>
                        <path d="M12 6v6l4 2"></path>
                      </svg>
                      2024-06-01
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 inline-block"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 12a9 9 0 0 0 18 0A9 9 0 0 0 3 12z"></path>
                        <path d="M9 12h6"></path>
                      </svg>
                      5 comments
                    </span>
                  </div>
                  <a
                    href="#"
                    className="font-semibold text-gray-700 hover:text-blue-600 flex items-center gap-1"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border flex flex-col overflow-hidden w-full max-w-xs mx-auto hover:scale-105 hover:rotate-[2deg] transition-transform duration-300  ">
                <div className="relative">
                  <img
                    alt="Post Title 2"
                    className="w-full h-48 object-cover"
                    src="https://picsum.photos/id/131/1920/1080"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-2 text-xs text-gray-400 flex gap-2">
                    <span className="text-blue-500">Google</span>
                    <span>Trending</span>
                    <span>New</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 leading-tight">
                    Post Title 2
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1">
                    Description for post 2
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 inline-block"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <circle cx={12} cy={12} r={10}></circle>
                        <path d="M12 6v6l4 2"></path>
                      </svg>
                      2024-06-02
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 inline-block"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 12a9 9 0 0 0 18 0A9 9 0 0 0 3 12z"></path>
                        <path d="M9 12h6"></path>
                      </svg>
                      3 comments
                    </span>
                  </div>
                  <a
                    href="#"
                    className="font-semibold text-gray-700 hover:text-blue-600 flex items-center gap-1"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border flex flex-col overflow-hidden w-full max-w-xs mx-auto hover:scale-105 hover:rotate-[2deg] transition-transform duration-300  ">
                <div className="relative">
                  <img
                    alt="Post Title 3"
                    className="w-full h-48 object-cover"
                    src="https://picsum.photos/id/132/1920/1080"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-2 text-xs text-gray-400 flex gap-2">
                    <span className="text-blue-500">Google</span>
                    <span>Trending</span>
                    <span>New</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 leading-tight">
                    Post Title 3
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1">
                    Description for post 3
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 inline-block"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <circle cx={12} cy={12} r={10}></circle>
                        <path d="M12 6v6l4 2"></path>
                      </svg>
                      2024-06-03
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 inline-block"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 12a9 9 0 0 0 18 0A9 9 0 0 0 3 12z"></path>
                        <path d="M9 12h6"></path>
                      </svg>
                      8 comments
                    </span>
                  </div>
                  <a
                    href="#"
                    className="font-semibold text-gray-700 hover:text-blue-600 flex items-center gap-1"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <footer className="bg-white text-black">
        <div className="border-b flex flex-col sm:flex-row justify-between items-center py-4 gap-4">
          <h1 className="sm:ml-[11vw] py-6 sm:py-10 text-3xl font-bold">
            adrianred
          </h1>
          <div className="sm:mr-[10vw] flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-instagram"
              aria-hidden="true"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5}></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-facebook"
              aria-hidden="true"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-twitter"
              aria-hidden="true"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </div>
        </div>
        <main className="flex flex-col md:flex-row md:space-x-[5vw] space-y-8 md:space-y-0 justify-center items-start py-4 px-4">
          <div>
            <h2 className="text-xl font-bold">Company Info</h2>
            <div className="flex flex-col pt-3">
              <a href="#" className="text-gray-400 font-bold">
                About Us
              </a>
              <a href="#" className="text-gray-400 font-bold">
                Career
              </a>
              <a href="#" className="text-gray-400 font-bold">
                We are hiring
              </a>
              <a href="#" className="text-gray-400 font-bold">
                Blog
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold">Legal</h2>
            <div className="flex flex-col pt-3">
              <a href="#" className="text-gray-400 font-bold">
                About Us
              </a>
              <a href="#" className="text-gray-400 font-bold">
                Career
              </a>
              <a href="#" className="text-gray-400 font-bold">
                We are hiring
              </a>
              <a href="#" className="text-gray-400 font-bold">
                Blog
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold">Features</h2>
            <div className="flex flex-col pt-3">
              <a href="#" className="text-gray-400 font-bold">
                Business Marketing
              </a>
              <a href="#" className="text-gray-400 font-bold">
                User Analytic
              </a>
              <a href="#" className="text-gray-400 font-bold">
                Live Chat
              </a>
              <a href="#" className="text-gray-400 font-bold">
                Unlimited Support
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold">Resources</h2>
            <div className="flex flex-col pt-3">
              <a href="#" className="text-gray-400 font-bold">
                iOS &amp; Android
              </a>
              <a href="#" className="text-gray-400 font-bold">
                Watch a Demo
              </a>
              <a href="#" className="text-gray-400 font-bold">
                Customers
              </a>
              <a href="#" className="text-gray-400 font-bold">
                API
              </a>
            </div>
          </div>
          <div className="mb-6 md:mb-10 w-full max-w-xs">
            <h2 className="text-xl font-bold">Get In Touch</h2>
            <form className="flex flex-col sm:flex-row gap-2 mt-2">
              <input
                placeholder="Your email address"
                className="border border-gray-300 rounded-md p-2 flex-1"
                type="text"
              />
              <input
                className="bg-blue-500 text-white rounded-md p-2 w-full sm:w-auto"
                type="button"
                defaultValue="Subscribe"
              />
            </form>
            <div className="text-gray-400 text-xs mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </main>
        <div className="text-left py-4 text-gray-300 text-sm sm:ml-[11vw] font-semibold px-4">
          This site actually has no rights to reserve but I will do that anyways,
          © 2023 Adrian Red. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Home;
