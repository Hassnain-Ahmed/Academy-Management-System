import { useState } from 'react'
import Login from './Login'
import Image from '/undraw_fingerprint_re_uf3f.svg'
import Register from './Register'

const LoginLayout = () => {
    const [showLogin, setShowLogin] = useState(true)
    const toggle = () => {
        setShowLogin(prev => !prev)
    }
    return (
        <div className="flex gap-5 items-center justify-center w-full mt-32">
            <div>
                <img src={Image} alt="" className='w-full' />
            </div>

            <div className="w-[40%]">
                {showLogin ? <Login toggle={toggle} /> : <Register toggle={toggle} />}
            </div>
        </div>
    )
}

export default LoginLayout