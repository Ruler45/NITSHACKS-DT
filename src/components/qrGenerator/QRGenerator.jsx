import styles from "./QRgen.module.scss";
import { QRCodeCanvas } from "qrcode.react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const QRgen = () => {
  const [url, setUrl] = useState("");
  const [pngUrl, setPngUrl] = useState();
  const ref = useRef();

  const handleClick = () => {
    console.log();
    setUrl(ref.current.value);
  };

  useEffect(() => {
    const canvas = document.getElementById("canvas");
    setPngUrl(url ? canvas.toDataURL("image/svg") : "");
    // console.log(pngUrl);
  }, [url, pngUrl]);

  return (
    <div className={styles.qrSection}>
      <div className={styles.inputBox}>
        <h2>Create Your QR Codes in Just a Few Clicks</h2>
        <label htmlFor="url">Paste a url or enter text to create a QR code</label>
        <input id="url" ref={ref} type="url" placeholder="Your link here" />
        <button onClick={handleClick}>Generate</button>
      </div>
        <div className={styles.qrArea}>
          <div className={styles.qrBox}>
            {url && <QRCodeCanvas value={url} size={160} id="canvas" />}
          </div>

          <Link download to={pngUrl}>
            <button>Download</button>
          </Link>
        </div>
      {/* <Link download to={pngUrl}>
          <button>Download</button>
        </Link> */}
    </div>
  );
};

export default QRgen;
