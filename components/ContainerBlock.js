import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ContainerBlock({ children, ...customMeta }) {
  const meta = {
    title: 'Team',
    description: `현재 next.js 웹사이트 제작 관련 공부중.`,
    image: '/avatar.png',
    type: 'website',
    ...customMeta,
  };
  </*홈페이지 상단 표시*/></>;
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
