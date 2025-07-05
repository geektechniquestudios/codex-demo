import Layout from '../components/Layout';
import Head from 'next/head';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Freelance Video Services</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Professional Video Creation & Editing</h1>
      <p className="mb-2">I offer high quality video production and editing services for businesses and individuals.</p>
      <p>Contact me to bring your ideas to life!</p>
    </Layout>
  );
}
