import styles from "./QRgen.module.scss"
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
      setPngUrl(url? canvas.toDataURL("image/png"): "");
      // console.log(pngUrl);
    }, [url, pngUrl]);

    return ( 
        <div className={styles.qrBox}>
        <input ref={ref} type="url" placeholder="Your link here" />
        <button onClick={handleClick}>Generate</button>
        {url ? (
          <div className="">
            <QRCodeCanvas id="canvas" value={url} />
            <Link download to={pngUrl}>
              <button>Download</button>
            </Link>
          </div>
        ) : (
          ""
        )}
        {/* <Link download to={pngUrl}>
          <button>Download</button>
        </Link> */}
      </div>
     );
}
 
export default QRgen;