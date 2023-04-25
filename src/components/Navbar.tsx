import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'



function Navbar() {
    const [isVisivble, setIsVisible] = useState(false)

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user ) {
            location.reload();
        }
    }

    const dropDown = () => {
        setIsVisible(!isVisivble)
        console.log((isVisivble));
        
    }

    const clicked = () => {
        setIsVisible(false)
    }



    return (
        <nav className='flex items-center justify-between flex-wrap bg-black text-white p-6'>   
            <div className='flex items-center flex-shrink-0 text-white-0 mr-6'>
                <Link to='/' className='font-semibold text-xl tracking-tight'>Crypto</Link>
            </div>
            <div className="block">
                <button 
                onClick={dropDown}
                className="flex items-center px-3 py-2 text-teal-200 
                border rounded border-white hover:text-white hover:border-white">
                
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            { isVisivble ? (
            <div className='w-full block flex-grow items-center'>
                <div className="text-sm lg:flex-grow">
                    <Button classname='p-3 m-5 bg-black border-white justify-center'>
                        <div>
                            <Link to='/' onClick={ clicked } className='flex-place-items-center mt-4 lg:inline-block lg:mt-0  
                            text-white hover:text-white mr-4'>
                                Home
                            </Link>
                        </div>
                    </Button>
                    <Button classname='p-3 m-5 bg-black justify-center'>
                        <div>
                            <Link to='/about' onClick={ clicked } className='flex-place-items-center mt-4 lg:inline-block lg:mt-0  
                            text-white hover:text-white mr-4'>
                                About
                            </Link>
                        </div>
                    </Button>
                    <Button classname='p-3 m-5 bg-black justify-center'>
                        <div>
                            <Link to='/dashboard' onClick={ clicked } className='flex-place-items-center mt-4 lg:inline-block lg:mt-0  
                            text-white hover:text-white mr-4'>
                                Dashboard
                            </Link>
                        </div>
                    </Button>
                    {
                        !auth.currentUser ? 

                        <Button classname='p-3 m-5 bg-black justify-center'>
                            <div>
                                <Link to="/" onClick={ () => { signInOnClick()}} className="flex place-items-center mt-4
                                lg:incline-block lg:mt-0 text-white hover:text-white">
                                    Login
                                </Link>
                            </div>
                        </Button>
                        :
                        <Button classname='p-3 m-5 bg-black justify-center'>
                        <div>
                            <Link to="/" onClick={ () => { signOutOnClick()}} className="flex place-items-center mt-4
                            lg:incline-block lg:mt-0 text-white hover:text-white">
                                Log Out
                            </Link>
                        </div>
                    </Button>
                    }
                </div>
                </div>) : 
            (<></>)}
        </nav>
    )
}

export default Navbar
