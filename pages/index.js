import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fawkes</title>
      </Head>
      <div className="flex items-center justify-center min-h-full">
        <Image
          src="/fawkes_icon.svg"
          alt=""
          width={300}
          height={300}
          className="opacity-25"
        />
      </div>
    </>
  );
}
