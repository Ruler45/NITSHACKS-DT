
import {Link} from 'react-router-dom'
import styles from './Hero.module.scss'
import Navbar from './Navbar/Navbar'

const Hero = () => {
    return (
        <>
            <Navbar/>
            <div className={styles.hero}>
                <div className={styles.left}>
                    <h2>Create Your Free QR Codes</h2>
                    <p>Create your own custom, high-quality QR codes with Wix
                        QR Code Generator. Use QR codes to drive traffic and
                        increase sales when customers scan your printed or
                        digital code</p>
                    <Link to="/qr"><button>Create QR Code</button></Link>
                </div>
                <div className={styles.right}>
                    <div className={styles.box}></div>
                </div>
            </div>
        </>
    )
}

export default Hero