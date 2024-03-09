"use client";
import Image from "next/image";
import Link from "next/link";
import FeedbackButton from "@/components/feedback-button";

export default function Home() {
  return (
    <div>
    {/* Navigation Bar Section*/}
    <FeedbackButton></FeedbackButton>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        {/*Item 1 Section*/}
        <div className="rounded-md place-content-evenly">
          <a href="/purchase/bunny">
            <img
              className="rounded-md"
              src="https://waywardpineapplecreations.com/wp-content/uploads/2020/03/bunny-amigurumi-white-background-front-1-scaled.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="/purchase/bunny">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Bunny Amigurumi Crochet
              </h5>
            </a>
            <span className="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
              3 In Stock -- Buy Now!
            </span>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              lil&apos; carrot jit
            </p>
            <a
              href="/purchase/bunny"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Purchase
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        {/*Item 2 Section*/}
        <div className="rounded-md place-content-evenly">
          <a href="/purchase/frog">
            <img
              className="rounded-md"
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJ57v6gfsLJA9TTINPXGRE0ZJVB2QBCqkkkxTRF4YzNixS5EpdFD8NSR-jCXvnVT9KEl0-vr5bdebWbPLDjFXURxqXvk_MUlp9Om9jRULgbdol2kjNLAIV2jpJDhEWKHLCRkNskyhHbjJtwrNnCANJm-2OBo-_5ZNVImGqkpUSkuMSb5PyVVXr9eyhGMAP/s2082/leggy%20frog%20crochet%20pattern%20free%20easy%20crochet%20frog%20pattern%20simple%20frog%20crochet%20pattern.jpeg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="/purchase/frog">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Frog Amigurumi Crochet
              </h5>
            </a>
            <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
              20+ In Stock
            </span>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              lil&apos; fly eater
            </p>
            <a
              href="/purchase/frog"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Purchase
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        {/*Item 3 Section*/}
        <div className="rounded-md place-content-evenly">
          <a href="/purchase/octopus">
            <img
              className="rounded-md"
              src="https://i0.wp.com/kraftykait.com/wp-content/uploads/2017/02/amigurumi-octopus.jpg?w=1920&ssl=1"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="/purchase/octopus">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Octopus Amigurumi Crochet
              </h5>
            </a>
            <span className="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
              7 In Stock
            </span>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              lil&apos; tentacles
            </p>
            <a
              href="/purchase/octopus"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Purchase
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
