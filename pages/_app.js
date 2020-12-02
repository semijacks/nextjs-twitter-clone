import "tailwindcss/tailwind.css";
import { Link } from "../components/Link";
import Head from "next/head";
import "../server";
import {
  HomeIcon,
  HomeIconEmpty,
  SearchIcon,
  SearchIconEmpty,
  BellIcon,
  BellIconEmpty,
  MailboxIcon,
  MailboxIconEmpty,
} from "../components/Icons";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" type="image/ico" sizes="128x128" href="/twitter.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="flex flex-col items-center justify-center w-screen h-screen mx-auto text-base text-gray-900 bg-cool-gray-200 xs:py-8">
        <div
          className="relative flex flex-col flex-1 w-full overflow-hidden bg-white shadow xs:max-w-sm"
          style={{ maxHeight: 812 }}
        >
          <header className="flex items-center px-4 py-3 border-b">
            <img
              className="rounded-full w-7 h-7"
              src="https://pbs.twimg.com/profile_images/1250768087303020550/NG846JtU_400x400.jpg"
            />
            <p className="ml-6 text-lg font-extrabold">
              {Component.headerTitle}
            </p>
          </header>

          <main className="flex-1 overflow-scroll">
            <Component {...pageProps} />
          </main>

          <footer className="flex border-t border-gray-200">
            <Link
              href="/"
              className="flex items-center justify-center w-1/4 py-3"
            >
              {({ isActive }) =>
                isActive ? (
                  <HomeIcon className="p-px text-blue-500 w-7 h-7" />
                ) : (
                  <HomeIconEmpty className="p-px text-gray-500 w-7 h-7" />
                )
              }
            </Link>
            <Link
              href="/explore"
              className="flex items-center justify-center w-1/4 py-3 text-gray-500"
            >
              {({ isActive }) =>
                isActive ? (
                  <SearchIcon className="p-px text-blue-500 w-7 h-7" />
                ) : (
                  <SearchIconEmpty className="p-px text-gray-500 w-7 h-7" />
                )
              }
            </Link>
            <Link
              href="/notifications"
              className="flex items-center justify-center w-1/4 py-3 text-gray-500"
            >
              {({ isActive }) =>
                isActive ? (
                  <BellIcon className="p-px text-blue-500 w-7 h-7" />
                ) : (
                  <BellIconEmpty className="p-px text-gray-500 w-7 h-7" />
                )
              }
            </Link>
            <Link
              href="/messages"
              className="flex items-center justify-center w-1/4 py-3 text-gray-500"
            >
              {({ isActive }) =>
                isActive ? (
                  <MailboxIcon className="p-px text-blue-500 w-7 h-7" />
                ) : (
                  <MailboxIconEmpty className="p-px text-gray-500 w-7 h-7" />
                )
              }
            </Link>
          </footer>
        </div>
      </div>
    </>
  );
}

export default MyApp;
