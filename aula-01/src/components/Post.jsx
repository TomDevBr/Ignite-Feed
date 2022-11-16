import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/TomDevBr.png" />
                    <div className={styles.authorInfo}>
                        <strong>Tomás Calheiros</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='11 de Agosto às 09:30h' dataTime="2022-08-11 09:30:50">Publicado há 1h</time>
            </header>

            
          

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