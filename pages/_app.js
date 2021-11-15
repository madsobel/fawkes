import dynamic from 'next/dynamic';
import { ThemeProvider } from 'next-themes';
import { VscGithub } from 'react-icons/vsc';

const TopSearch = dynamic(() => import('../components/top_search'), {
  ssr: false,
});
import ModeSwitch from '../components/mode_switch';
import SidebarNav from './sidebar_nav';

import '../styles/globals.css';

function FawkesApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div>
        <header className="transition h-12 fixed w-full bg-gray-200 dark:text-gray-200 dark:bg-gray-900 dark:border-gray-900 border-b border-gray-300 flex items-center justify-between pl-24 pr-6 z-10">
          <div className="" />
          <div className="">
            <TopSearch />
          </div>
          <div className="flex">
            <a
              href="https://github.com/madsobel/fawkes"
              rel="noreferrer"
              target="_blank"
              className="transition p-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 mr-4"
            >
              <span className="sr-only">Github</span>
              <VscGithub className="h-6 w-6" />
            </a>
            <ModeSwitch />
          </div>
        </header>
        <main className="flex min-h-screen pt-12 bg-white">
          <nav
            className="transition overflow-auto w-80 border-r font-mono text-sm dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
            style={{ height: 'calc(100vh - 3rem)' }}
          >
            <SidebarNav />
          </nav>
          <section
            className="transition w-full relative overflow-auto bg-gray-50 dark:bg-gray-800 dark:text-gray-200 p-4"
            style={{ height: 'calc(100vh - 3rem)' }}
          >
            <Component {...pageProps} />
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default FawkesApp;
