import styles from "./QrCard.module.scss"
const QrCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.box}>
                    <form>
                        <label>URL:
                            <input
                                type="text"
                                placeholder="Enter your url...."
                            />
                        </label>
                        <label>Text:
                            <input
                                type="text"
                                placeholder="Enter your text...."
                            />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default QrCard