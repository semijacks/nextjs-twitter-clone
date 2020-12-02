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
        <link
          rel="icon"
          type="image/png"
          sizes="196x196"
          href="/favicon-196.png"
        />
        <link rel="apple-touch-icon" href="/apple-icon-180.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-2048-2732.jpg"
          media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-2732-2048.jpg"
          media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-1668-2388.jpg"
          media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-2388-1668.jpg"
          media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-1536-2048.jpg"
          media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-2048-1536.jpg"
          media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-1668-2224.jpg"
          media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-2224-1668.jpg"
          media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-1620-2160.jpg"
          media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-2160-1620.jpg"
          media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-1284-2778.jpg"
          media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-2778-1284.jpg"
          media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-1170-2532.jpg"
          media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-2532-1170.jpg"
          media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-1125-2436.jpg"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-2436-1125.jpg"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-1242-2688.jpg"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-2688-1242.jpg"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-828-1792.jpg"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-1792-828.jpg"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-1242-2208.jpg"
          media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-2208-1242.jpg"
          media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-750-1334.jpg"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-1334-750.jpg"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-640-1136.jpg"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-1136-640.jpg"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
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
