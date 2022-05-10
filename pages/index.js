/* eslint-disable @next/next/no-img-element */

import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  const response = await fetch(
    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
  );

  return {
    props: {
      pokemon: await response.json()
    }
  }

}

// default Home functional component defined below.

export default function Home({ pokemon }) {

  

  return (
    <div className={styles.container}>
      <Head>
        <title>Next Pokemon List</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <h2>Next Pokemon List</h2>

      <div className={styles.grid}>
        {pokemon.map((pokemon) => (
          <div className={styles.card} key={pokemon.id}>
            <Link href={`/pokemon/${pokemon.id}`}>
              <a>
                <img
                  src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                  alt={pokemon.name}
                />
                <h3>{pokemon.name} →</h3>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
