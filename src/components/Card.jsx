import { Link } from "react-router-dom"
import backUpImg from "../assets/backup.jpeg"

export const Card = ({movie}) => {
    const{id,original_title,overview,poster_path}=movie;
    const image= poster_path? `https://image.tmdb.org/t/p/w500/${poster_path}` : backUpImg;
  return (
    <div className="bg-neutral-primary-soft dark:bg-black dark:text-white block max-w-sm p-6 border border-default rounded-base shadow-xs m-3">
                  <Link to={`/movie/${id}`}>
                      <img className="rounded-base" src={image} alt="" />
                  </Link>
                  <Link to={`/movie/${id}`}>
                      <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">{original_title}</h5>
                  </Link>
                  <p className="mb-6 text-body">{overview}</p>
              </div>
  )
}
