
import { lobster } from "../ui/fonts";
import Nav from "../ui/nav";
import { Pagination } from "../ui/pagination";
import styles from "./page.module.css";


export default function page (){
    return(
        <>
            <header className={styles.header}>
                <h2 className={`${styles.logo} ${lobster.className}`}>Delicius Pizza</h2>
                <Nav />
            </header>
            <main>
                <section className={styles.section}>
                    <h1 className={`${lobster.className}`}>Descubre todas las <span className="section1_spam">opciones</span> que tenemos <span className="section1_spam">para ti</span> en nuestro <span className="section1_spam">menu</span></h1>
                </section>
                <section>
                    <Pagination />
                </section>
            </main>
        </>
    )
}