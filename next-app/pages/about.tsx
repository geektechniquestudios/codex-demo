import Layout from '../components/Layout';
import Head from 'next/head';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - Freelance Video</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">About Me</h1>
      <p>I am a freelance video creator and editor with years of experience crafting compelling stories.</p>
    </Layout>
  );
}
