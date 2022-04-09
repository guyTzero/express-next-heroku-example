import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Self-Esteem Booster</title>
        <meta name="description" content="Self-Esteem Booster" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.centered}>
        <h2>Self-Esteem Booster .APK</h2>
        <h2 className={styles.downloadClick} onClick={() => window.location.href="https://drive.google.com/file/d/1JEwXFnPqIckbEt5VMtH0xMNAfJ8oOBUZ/view?usp=sharing"}>Download</h2>

        <div style={{flexDirection:'row',display:'flex'}}>
        <div style={{flex:1,margin:5}}>
          <img src="images/img1.png" width="80px" />
          </div>
          <div style={{flex:1,margin:5}}>
          <img src="images/img2.png" width="80px" />
          </div>
          <div style={{flex:1,margin:5}}>
          <img src="images/img3.png" width="80px" />
          </div>
          <div style={{flex:1,margin:5}}>
          <img src="images/img4.png" width="80px" />
          </div>

        </div>
        <div style={{margin: 20,wordBreak:'keep-all'}}>This application will increase your self esteem if you know how to use it.</div>
      </div>
    </div>
  );
}
