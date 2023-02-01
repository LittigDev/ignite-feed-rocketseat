import { Comment } from './Comment';
import { Avatar } from './Avatar';
import styles from './Post.module.css';

//TODO: Ajustar cor do valor escrito em textarea;

export function Post(props) {
    console.log('Props the post', props)

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={props.author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>

                <time title="31 de Janeiro às 08:00h" dateTime="2023-01-31 08:00:00">Públicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋🏼</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat</p>
                <p>👉🏼 <a href="#">jane.desing/doctorcare</a></p>
                <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe seu comentário"/>
                <footer>
                    <button type="submit">Publicar</button>
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