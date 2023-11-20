

const Posts = ({ posts }) => {
    return (
        <>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div className="card text-left mt-2 mb-2 w-100" key={post.id}>
                        <div className="card-body">
                            <h4 className="card-title">{post.title}</h4>
                            <small className="card-text">{post.date}</small>
                            <p className="card-text">{post.content}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p className='text-center'>No Posts to display..!</p>
            )}
        </>
    )
}

export { Posts }