import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';
import PostFeed from '@/components/post/PostFeed';
import Header from '@/components/layout/Header';
import Form from '@/components/layout/Form';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header label="Home"/>
    <Form placeholder="What's happening?"/>
    <PostFeed />
    </>
  )
}
