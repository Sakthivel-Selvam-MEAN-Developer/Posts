

const NewPost = ({newPostTitle, newPostContent ,handleSubmit, setNewPostTitle, setNewPostContent}) => {
    return(
        <div className="container mb-3 p-0 mt-3 newpost">
            <h3>New Post</h3>
            <form action="#"  onSubmit={handleSubmit} className="mt-2 ms-5 me-5 pt-4 pb-5 ps-5 pe-5 rounded">
                <label htmlFor="post-title" className="text-white d-flex text-start ms-2">Title</label>
                <input type="text" className="form-control mt-2" id='post-title' value={newPostTitle} required onChange={(e) => setNewPostTitle(e.target.value)}/>
                <label htmlFor="post-title" className="text-white d-flex text-start ms-2 mt-3">Post</label>
                <textarea className="form-control mt-2" name="content" id="content" cols="30" rows="10" value={newPostContent} required onChange={(e) => setNewPostContent(e.target.value)}></textarea>
                <button type="submit" className="btn btn-warning mt-4 w-100">Add Post</button>
            </form>
        </div>
    )
}

export {NewPost}