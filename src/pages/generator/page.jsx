import QRgen from "../../components/qrGenerator/QRGenerator";
import styles from "./Generator.module.scss";

const Generator = () => {
    return ( 
        <div className={styles.Generator}>
            <QRgen/>
        </div>
     );
}
 
export default Generator;