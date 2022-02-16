import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <LogInButton /> */}
        {/* <SignInButton /> */}
        
        <>
        <button className={styles.log}> Log In</button>
        <button className={styles.sign}> Sign Up</button>
        </>
        
        <div className={styles.logo}><span>Logo</span></div>
        <h1 className={styles.title}>Welcome to iGive!</h1>
        <p className={styles.article}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac neque a lacus convallis cursus. Aenean aliquam orci sit amet lectus sagittis, quis porta enim elementum. Duis a ultrices purus, nec rhoncus purus. Curabitur consequat vulputate mi, quis viverra justo auctor quis. Curabitur congue eu metus dapibus luctus.</p>

        {/* <ReadMoreButton /> */}
        <button className={styles.read}> Read More ...</button>
        <h3 className={styles.useDescription}>How to use iGive:</h3>
        
        <iframe className={styles.video} width="440" height="315" src="https://www.youtube.com/embed/dnKFSafaJOo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </main>


      
    </div>
  )
}
