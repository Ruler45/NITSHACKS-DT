// import { Icon } from '@iconify/react';
// import Navbar from "../components/shared/Navbar/Navbar";
import styles from "./Home.module.scss";
import QRgen from "../components/qrGenerator/QRGenerator";


const Home = () => {
 

  return (
    <div className={styles.main}>
      <QRgen/>
    </div>
  );
};

export default Home;
