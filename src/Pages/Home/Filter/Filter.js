import React from "react";
import { IconContext } from "react-icons";
import { IoCaretDownOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Filter = () => {
  return (
    <>
      <section className="font-Poppins">
        <div className="flex space-x-5 justify-start items-center container mx-auto h-16 px-5">
          <aside className="border-[1px] border-gray-500 rounded-full px-3 py-1 text-sm">
            <div className="flex items-center space-x-1">
              <h2>Date Posted</h2>
              <IconContext.Provider value={{ size: 17, color: "gray" }}>
                <IoCaretDownOutline />
              </IconContext.Provider>
            </div>
          </aside>
          <aside className="dropdown border-[1px] border-gray-500 rounded-full px-3 py-1 text-sm cursor-pointer">
            <label
              tabIndex={0}
              className="flex items-center space-x-1 cursor-pointer"
            >
              <h2>Job Type</h2>
              <IconContext.Provider value={{ size: 17, color: "gray" }}>
                <IoCaretDownOutline />
              </IconContext.Provider>
            </label>
            <ul
              tabIndex={0}
              class="dropdown-content w-48 text-sm font-medium text-black bg-white border mt-[21px] -ml-[14px]"
            >
              <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="vue-checkbox"
                    type="checkbox"
                    value=""
                    class="w-6 h-6 hover: text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="vue-checkbox"
                    class="w-full py-3 ml-2 text-sm font-light text-gray-900 "
                  >
                    Full-Time
                  </label>
                </div>
              </li>
              <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="react-checkbox"
                    type="checkbox"
                    value=""
                    class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="react-checkbox"
                    class="w-full py-3 ml-2 text-sm font-light text-gray-900 "
                  >
                    Part-Time
                  </label>
                </div>
              </li>
              <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="angular-checkbox"
                    type="checkbox"
                    value=""
                    class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="angular-checkbox"
                    class="w-full py-3 ml-2 text-sm font-light text-gray-900 "
                  >
                    Internship
                  </label>
                </div>
              </li>
              <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="laravel-checkbox"
                    type="checkbox"
                    value=""
                    class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="laravel-checkbox"
                    class="w-full py-3 ml-2 text-sm font-light text-gray-900 "
                  >
                    Contract
                  </label>
                </div>
              </li>
              <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="laravel-checkbox"
                    type="checkbox"
                    value=""
                    class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="laravel-checkbox"
                    class="w-full py-3 ml-2 text-sm font-light text-gray-900 "
                  >
                    Temporary
                  </label>
                </div>
              </li>
              <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="laravel-checkbox"
                    type="checkbox"
                    value=""
                    class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="laravel-checkbox"
                    class="w-full py-3 ml-2 text-sm font-light text-gray-900 "
                  >
                    Other
                  </label>
                </div>
              </li>
            </ul>
          </aside>
          <aside className="border-[1px] border-gray-500 rounded-full px-3 py-1 text-sm">
            <div className="flex items-center space-x-1">
              <h2>Salary Range</h2>
              <IconContext.Provider value={{ size: 17, color: "gray" }}>
                <IoCaretDownOutline />
              </IconContext.Provider>
            </div>
          </aside>
          <aside className="dropdown border-[1px] border-gray-500 rounded-full px-3 py-1 text-sm">
            <label
              tabIndex={0}
              className="flex items-center space-x-1 duration-300 border-none"
            >
              <h2 className="border-none">Experience Level</h2>
              <IconContext.Provider value={{ size: 17, color: "gray" }}>
                <IoCaretDownOutline />
              </IconContext.Provider>
            </label>
            <ul
              tabIndex={0}
              class="dropdown-content w-48 text-sm font-medium text-black bg-white border mt-[21px] -ml-[10px]"
            >
              <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="vue-checkbox"
                    type="checkbox"
                    value=""
                    class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="vue-checkbox"
                    class="w-full py-3 ml-2 text-sm font-light text-gray-900 "
                  >
                    Internship
                  </label>
                </div>
              </li>
              <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="react-checkbox"
                    type="checkbox"
                    value=""
                    class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="react-checkbox"
                    class="w-full py-3 ml-2 text-sm font-light text-gray-900 "
                  >
                    Entry Level
                  </label>
                </div>
              </li>
              <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="angular-checkbox"
                    type="checkbox"
                    value=""
                    class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="angular-checkbox"
                    class="w-full py-3 ml-2 text-sm font-light text-gray-900 "
                  >
                    Mid-Senior Level
                  </label>
                </div>
              </li>
              <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="laravel-checkbox"
                    type="checkbox"
                    value=""
                    class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="laravel-checkbox"
                    class="w-full py-3 ml-2 text-sm font-light text-gray-900 "
                  >
                    Director
                  </label>
                </div>
              </li>
              <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="laravel-checkbox"
                    type="checkbox"
                    value=""
                    class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="laravel-checkbox"
                    class="w-full py-3 ml-2 text-sm font-light text-gray-900 "
                  >
                    Executive
                  </label>
                </div>
              </li>
            </ul>
          </aside>
          <Link to="/about">
            <aside className="border-[1px] border-gray-500 rounded-full px-5 py-1 text-sm">
              <h2>Reset</h2>
            </aside>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Filter;
