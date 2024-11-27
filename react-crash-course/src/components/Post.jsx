const names = ['zobair', 'hussain'];

export function Post(props) {
    
    return (
        <div>
            <p>{props.author}</p>
            <p>{props.body}</p>
        </div>
    );
}