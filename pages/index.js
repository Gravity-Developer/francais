import Head from 'next/head'
import styles from '../styles/index.module.css'
import { blue, Spacer, Text, Row, Grid, Card, Image } from '@nextui-org/react'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Francais Club | 2022-2023</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.div}>
          <div className={styles.navbar}>

          </div>
          <div className={styles.background}>
          <Text h1 title='Join the French Club' style={{position:"relative"}}>Joindre le Francais Club !</Text>
          <Spacer y={1} />
          <Text i color='grey' size={20} style={{position:"relative"}}>Registration is OPEN for 2022-2023.</Text>
          <Spacer y={15} />
          <Image src={"/arrow.png"} width={"15vh"} height={"15vh"}></Image>
          </div>
        </div>
        <Grid.Container justify='2' gap={2}>
            <Grid xs={6}>
              <Card>
                <Card.Body>
                    Hello
                </Card.Body>
              </Card>
            </Grid>
            <Grid xs={6}>
              <Card>
                <Card.Body>
                    Hello
                </Card.Body>
              </Card>
            </Grid>
            <Grid xs={6}>
              <Card>
                <Card.Body>
                    Hello
                </Card.Body>
              </Card>
            </Grid>
        </Grid.Container>

        

      </main>
    </div>
  )
}
