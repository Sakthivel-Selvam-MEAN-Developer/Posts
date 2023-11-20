import { Feed } from '../feed/feed';
import './main.css';

const Main = ({ posts }) => {

    return (
        <div className="container mb-2 ">
            <Feed posts={posts}/>
        </div>
    )
}

export { Main }
