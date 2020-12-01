import "tailwindcss/tailwind.css";
import { Link } from "../components/Link";
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
    <div className="flex flex-col h-screen">
      <header className="flex items-center px-4 py-3 border-b">
        <img
          className="w-8 h-8 rounded-full"
          src="http://twivatar.glitch.me/samselikoff"
        />
        <p className="ml-6 text-lg font-extrabold">Latest Tweets</p>
      </header>

      <main className="flex-1">
        <Component {...pageProps} />
      </main>

      <footer className=" flex border-t border-gray-200">
        <Link
          href="/"
          className="text-blue-500 flex items-center justify-center w-1/4 py-3"
        >
          {({ isActive }) =>
            isActive ? (
              <HomeIcon className="p-px w-7 h-7 text-blue-500" />
            ) : (
              <HomeIconEmpty className="p-px w-7 h-7 text-gray-500"></HomeIconEmpty>
            )
          }
        </Link>
        <Link
          href="/explore"
          className="text-gray-500 flex items-center justify-center w-1/4 py-3"
        >
          {({ isActive }) =>
            isActive ? (
              <SearchIcon className="p-px w-7 h-7 text-blue-500" />
            ) : (
              <SearchIconEmpty className="p-px w-7 h-7 text-gray-500"></SearchIconEmpty>
            )
          }
        </Link>
        <Link
          href="/notifications"
          className="text-gray-500 flex items-center justify-center w-1/4 py-3"
        >
          {({ isActive }) =>
            isActive ? (
              <BellIcon className="p-px w-7 h-7 text-blue-500" />
            ) : (
              <BellIconEmpty className="p-px w-7 h-7 text-gray-500"></BellIconEmpty>
            )
          }
        </Link>
        <Link
          href="/messages"
          className="text-gray-500 flex items-center justify-center w-1/4 py-3"
        >
          {({ isActive }) =>
            isActive ? (
              <MailboxIcon className="p-px w-7 h-7 text-blue-500" />
            ) : (
              <MailboxIconEmpty className="p-px w-7 h-7 text-gray-500"></MailboxIconEmpty>
            )
          }
        </Link>
      </footer>
    </div>
  );
}

export default MyApp;
