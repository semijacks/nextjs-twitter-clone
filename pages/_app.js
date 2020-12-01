import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center px-4 py-3 border-b">
        <img
          className="w-8 h-8 rounded-full"
          src="http://twivatar.glitch.me/samselikoff"
        />
        <p className="ml-6 text-lg font-extrabold">Home</p>
      </header>

      <main className="flex-1">
        <Component {...pageProps} />
      </main>

      <footer className=" flex border-t">
        <a className="w-1/4 py-2 text-center" href="">
          Link
        </a>
        <a className="w-1/4 py-2 text-center" href="">
          Link
        </a>
        <a className="w-1/4 py-2 text-center" href="">
          Link
        </a>
        <a className="w-1/4 py-2 text-center" href="">
          Link
        </a>
      </footer>
    </div>
  );
}

export default MyApp;
