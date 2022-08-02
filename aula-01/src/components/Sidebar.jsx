import styles from './Sidebar.module.css'

export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
            />

            <div className={styles.profile}>
                <strong>Tomás Calheiros</strong>
                <span>Web developer</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu Perfil
                </a>
            </footer>

        </aside>
    )
}