import Navbar from "../../components/Navbar/Navbar";
import QRgen from "../../components/qrGenerator/QRGenerator";
import styles from "./Generator.module.scss";

const Generator = () => {
    return ( 
        <div className={styles.Generator}>
            <Navbar/>
            <QRgen/>
        </div>
     );
}
 
export default Generator;