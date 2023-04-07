import LoginModal from "@/components/modal/LoginModal";
import RegisterModal from "@/components/modal/RegisterModal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import EditModal from "@/components/modal/EditModal";
import Head from "next/head";
import PostModal from "@/components/modal/PostModal";
import Favicon from "@/components/layout/Favicon";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>tUWitter</title>
        <Favicon />
      </Head>
      
      <SessionProvider session={pageProps.session}>
        <Toaster />
        <EditModal />
        <PostModal/>
        <RegisterModal />
        <LoginModal />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}
