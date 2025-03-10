import { FaPencil, FaX } from 'react-icons/fa6'
import { Link } from 'react-router'
export default function PostCardAdmin({ item }) {
    const post = item
    return ( <li className="list-row">
                     
    <div>
    <div> {post.title} </div>
    <div className="text-xs uppercase font-semibold opacity-60">
        {new Date(post.createdAt).toDateString()}
    </div>
    </div>
    <Link to={`/admin/posts/edit/${post._id}`} className="btn btn-square btn-ghost">
        <FaPencil/>
    </Link>
    <Link to={`/admin/posts/delete/${post._id}`} className="btn btn-square btn-ghost">
        <FaX/>
    </Link>
    </li>)
}