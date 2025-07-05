import Layout from '../components/Layout';
import Head from 'next/head';

export default function Services() {
  return (
    <Layout>
      <Head>
        <title>Services - Freelance Video</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">Services</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>Promo and marketing videos</li>
        <li>Event coverage and editing</li>
        <li>Social media clips</li>
        <li>Product demos</li>
      </ul>
    </Layout>
  );
}
