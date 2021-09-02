import { HiLightningBolt } from 'react-icons/hi';
import styles from './footer.module.scss'

export default function Footer({ siteTitle }) {
  const date = new Date();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>&copy; {date.getFullYear()} {siteTitle}</p>
      </div>
    </footer>
  )
}