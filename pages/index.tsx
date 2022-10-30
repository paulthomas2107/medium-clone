import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Text, Spacer } from '@nextui-org/react'

// localhost:3000 
const Home: NextPage = () => {
    return (
      <>
      <Text h2>The future of article sharing</Text>
      <Spacer y={1} />
      <Text size="$1g">
          SharedArticles allows you to create and share articles.
      </Text>
      </>
    )
}

export default Home;
    