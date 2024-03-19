import styles from "./page.module.css";
import Nav from "./ui/nav"
import "./globals.css"
import { lobster, montserrat} from "./ui/fonts"
import Image from 'next/image'


export default function page() {
    return(
        <>
            <header className={styles.portada_container}>
            <Nav />
            <h1 className={`${styles.portada_title} ${lobster.className}`}>Delicius Pizza</h1>
            <p className={`${styles.portada_parrafo} ${montserrat.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit sit amet massa ac dapibus. Nullam eros neque, accumsan eu imperdiet eget.
            </p>
            <div className={styles.portada_buttons}>
                <button className={`buttom1 ${montserrat.className}`}>Ordenar</button>
                <button className={`buttom2 ${montserrat.className}`}>Menu</button>
            </div>
            </header>
            <main>
                <section className={styles.sectiontipo1}>
                    <div className={styles.divsection}>
                        <h2 className={`${lobster.className} ${styles.section_title}`}>Welcome to<br/><spam className="section1_spam">Delicus pizza</spam></h2>
                        <p className={`${montserrat.className} ${styles.section_parrafo}`}>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
                        </p>
                    </div>
                    <Image 
                        src="/img1.webp"
                        width={344}
                        height={214}
                        className={styles.imageMobile}
                    />
                    <Image 
                        src="/rectangle-5-65e786dd3b346.webp"
                        className={styles.imageDesk}
                        width={562}
                        height={358}
                    />
                </section>
                
                <section className={styles.section2}>
                    <h2 className={`${lobster.className} ${styles.section2_title}`}><spam className="section1_spam">Descubre</spam><br/>Delicus pizza</h2> 
                </section>

                <section className={styles.sectiontipo1}>
                    <div className={styles.divsection2}>
                        <h2 className={`${lobster.className} ${styles.section_title2}`}>Ordena desde la comodidad de tu hogar,<spam className="section1_spam">contamos con un excelente delivery</spam></h2>
                        <button className={`buttom1 ${montserrat.className}`}>Ordenar</button>
                    </div>
                    <Image 
                        src="/img2.webp"
                        width={344}
                        height={214}
                        className={styles.imageMobile}
                    />
                    <Image 
                        src="/rectangle-14-65e786de0a82e.webp"
                        className={styles.imageDesk}
                        width={562}
                        height={358}
                    />
                </section>

                <section className={styles.section4}>
                    <h2 className={`${lobster.className} ${styles.section2_title}`}>Cualquier <spam className="section1_spam">momento</spam> es bueno para una <spam className="section1_spam">pizza</spam></h2> 
                </section>

                <section className={styles.sectiontipo1}>
                    <Image 
                        src="/img3.webp"
                        width={344}
                        height={214}
                        className={styles.imageMobile}
                    />
                    <Image 
                        src="/rectangle-15-65e786df5f6d9.webp"
                        className={styles.imageDesk}
                        width={562}
                        height={358}
                    />
                    
                    <div>
                        <h2 className={`${lobster.className} ${styles.section_title}`}>Acompaña con una <spam className="section1_spam">pizza</spam> esos <spam className="section1_spam">momentos especials</spam></h2>
                        <p className={`${montserrat.className} ${styles.section_parrafo}`}>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
                        </p>
                    </div>
                </section>
            </main>
        </>
    )    
}