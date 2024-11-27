import style from './Post.module.css';

export function Post(props) {
    
    return (
        <div className={style.post}>
            <p className={style.author}>{props.author}</p>
            <p className={style.text}>{props.body}</p>
        </div>
    );
}