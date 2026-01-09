import { Link } from "react-router-dom"


export const Footer = () => {
  return (
    

        <footer className="bg-neutral-primary-soft text-gray-700 rounded-base shadow-xs border border-default ">
            <div className="w-full mx-auto  p-4 md:flex md:items-center md:justify-between">
              <span className="text-sm text-body sm:text-center">© 2030 <Link href="/" className="hover:underline">Cinemate™</Link>. All Rights Reserved.
            </span>
            <ul className="flex text-gray-700 flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
                <li>
                    <a href="#" ref="noreferrer" target="_blank" className="hover:underline me-4 md:me-6">Instagram</a>
                </li>
                <li>
                    <a href="#" ref="noreferrer" target="_blank" className="hover:underline me-4 md:me-6">LinkedIn</a>
                </li>
                <li>
                    <a href="#" ref="noreferrer" target="_blank"className="hover:underline me-4 md:me-6">Youtube</a>
                </li>
                <li>
                    <a href="#" ref="noreferrer" target="_blank" className="hover:underline">Github</a>
                </li>
            </ul>
            </div>
        </footer>

  )
}
