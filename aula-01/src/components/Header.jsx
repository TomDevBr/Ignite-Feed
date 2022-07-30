import styles from './Header.module.css';

import igniteLogo from '/src/assets/ignite-logo.svg'

export function Header() {

    console.log(igniteLogo)
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logo da ignite Feed" />
        </header>
    )
}