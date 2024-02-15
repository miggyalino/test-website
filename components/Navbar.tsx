
// 'rafce' to create component

import Button from "./Button"

const Navbar = () => {
  return (
    <nav className='bg-slate-500 p-4 flex justify-between items-center'>

        <div>
            <h1 className='font-bold'>Rhyss Website</h1>
        </div>

        <div>
            <ul className='flex space-x-4'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>

        <div>
            <Button 
                text='My Nudes'
            />
        </div>
        
    </nav>
  )
}

export default Navbar