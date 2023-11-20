import { Posts } from "../posts/posts"


const Feed = ({ posts }) => {
    return (
        <>
            <h3 className='mb-3 mt-3'>Posts</h3>
            <div className="card-container rounded d-flex flex-column justify-content-between ps-5 pe-5 pt-4 pb-4 mb-5">
                <Posts posts={posts}/>
            </div>
        </>
    )
}

export {Feed}