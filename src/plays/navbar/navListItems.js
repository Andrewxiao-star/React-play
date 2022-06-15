import React, { useState } from 'react'
import Collasp from '../navbar/assest/img.png'
import LogoImage from '../navbar/assest/logo.png'
import img1 from "./assest/Chart.png"
import img2 from "./assest/Chat.png"
import img3 from "./assest/User.png"
import img4 from "./assest/Setting.png"
import img5 from "./assest/Search.png"

const NavListItems = (props) => {
    const [open, setOpen] = useState(true);
    const handleOnClick = () => setOpen((prevState) => !prevState)

    return (
        <>
            {/* Code Starts Here */}
            <div className='flex'>

                <div className={`${open ? 'w-72' : 'w-20'}
             duration-500 h-screen p-5 pt-8 bg-slate-900 relative`}>

                    <img src={Collasp}
                        alt=''
                        className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 bg-cyan-500 ${!open && "rotate-180"}`}
                        onClick={handleOnClick} />

                    <div className='flex gap-x-4 items-center'>
                        <img src={LogoImage}
                            alt='play-logo'
                            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} />

                        <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>Develop</h1>

                    </div>
                    {/* ListItems */}

                    <ul className="pt-6">

                        {/* Item1 */}
                        <a href='https://reactplay.io/'>
                            <li
                                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 hover:bg-gray-50 hover:text-slate-900 rounded-md
mt-2 `} >
                                <img src={img1} alt="img" />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    Dashboard
                                </span>
                            </li>
                        </a>

                        {/* Item2 */}
                        <a href='https://reactplay.io/ideas'>
                            <li
                                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 hover:bg-gray-50 hover:text-slate-900 rounded-md
 mt-2 `} >
                                <img src={img2} alt="img2" />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    <a href='google.com'>Ideas</a>
                                </span>
                            </li>
                        </a>

                        {/* Item3 */}
                        <a href='https://twitter.com/reactplayio'>
                            <li
                                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 hover:bg-gray-50 hover:text-slate-900 rounded-md
 mt-2 `} >
                                <img src={img3} alt="img" />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    <a href='google.com'>Join</a>
                                </span>
                            </li>
                        </a>

                        {/* Item4 */}
                        <a href='https://github.com/reactplay/react-play/blob/main/CREATE-PLAY.md'>
                            <li
                                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 hover:bg-gray-50 hover:text-slate-900 rounded-md
  mt-9 `} >
                                <img src={img4} alt="img" />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    <a href='google.com'>Build</a>
                                </span>
                            </li>
                        </a>

                        {/* Item5 */}
                        <a href='http://localhost:3000/plays'>
                            <li
                                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 hover:bg-gray-50 hover:text-slate-900 rounded-md
mt-2  `} >
                                <img src={img5} alt="img" href="http://localhost:3000/plays" />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    Search
                                </span>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default NavListItems;
