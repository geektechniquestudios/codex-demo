import Layout from '../components/Layout';
import Head from 'next/head';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact - Freelance Video</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <p>Email me at <a href="mailto:video@example.com" className="text-blue-600 underline">video@example.com</a></p>
    </Layout>
  );
}
