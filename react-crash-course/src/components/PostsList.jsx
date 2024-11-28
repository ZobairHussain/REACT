import Post from "./Post";

export function PostsList(){
    return(
        <ul className={classes.posts}>
            <Post author="zobair" body="React is awesome!!"/>
            <Post author="hussain" body="Checkout this course."/>
        </ul>
    );
}