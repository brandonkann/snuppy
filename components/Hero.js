import React from 'react';

export default function Hero() {
  return (
    <>
      <div class="dark:bg-gray-900 pb-9">
        <div class="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-1 2xl:mx-auto 2xl:container">
          <div class="z-30 relative lg:w-1/2">
            <div class="hidden dark:bg-gray-800 bg-gray-100 w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
              <div class="w-full lg:w-auto lg:-mr-32">
                <img
                  src="/images/coverphoto.jpg"
                  alt="image with decent chairs"
                  class="w-full relative z-30 lg:pl-20 px-6 py-14"
                />
              </div>
            </div>
            <div class="absolute top-0 dark:bg-gray-800 bg-gray-100 md:h-96 w-full hidden md:block lg:hidden"></div>
            <div class="w-full h-full lg:hidden">
              <img
                src="https://i.ibb.co/YQjkqWr/juan-burgos-FIy-XGZ1q0mc-unsplash-1.png"
                alt="image with decent chairs"
                class="w-full relative z-30 lg:pl-20 md:px-6 py-5 md:py-14"
              />
            </div>
          </div>
          <div class="bg-gray-100 dark:bg-gray-800 lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center">
            <div>
              <h1 class="dark:text-white md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text-4xl font-semibold text-gray-800 capitalize">
              From Elementary School to University
              </h1>
              <p class="dark:text-gray-300 md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-gray-600 mt-5">
              We make learning simpler, more personalized, more collaborative and more affordable
              </p>
              <button class="dark:bg-white dark:hover:bg-gray-400 dark:hover:text-gray-100 dark:text-gray-800 sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center">
                Explore classes
                <div class="ml-2 mt-0.5">
                  <img
                    class="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero-VIII-svg1.svg"
                    alt="arrow"
                  />
                  <img
                    class="dark:block hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero-VIII-svg1dark.svg"
                    alt="arrow"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
