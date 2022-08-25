import styles from './Post.module.css';
import { Comment } from './Comment';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/TomDevBr.png" />
                    <div className={styles.authorInfo}>
                        <strong>Tomás Calheiros</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='11 de Agosto às 09:30h' dataTime="2022-08-11 09:30:50">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
               <p> Fala galeraa 👋</p>

               <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

               <p><a href=""> jane.design/doctorcare</a></p>

               <p>
                    <a href=""> #novoprojet</a>{' '}
                    <a href=""> #nlw</a>{' '} 
                    <a href=""> #rocketseat</a>
               </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário'></textarea>
                <footer>
                    <button type='submmit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                 <Comment />
                 <Comment />
                 <Comment />
            </div>
        </article>
    )
}