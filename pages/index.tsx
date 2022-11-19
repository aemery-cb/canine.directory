import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import transcripts from './api/transcripts.json'

import { GetServerSideProps } from 'next'

type Data = string[]

export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (context) => {

  const data = transcripts.map(x => x.title)
  return {
    props: {
      data,
    },
  }
}
export default function Home(props: { data: string[] }) {
  return (
    <div className={styles.container}>
      {props.data.map((x, index) => <div key={index}><a href={"transcript/" + index}>{x}</a></div>)}
    </div>
  )
}
