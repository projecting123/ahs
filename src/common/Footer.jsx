import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='grid sm:grid-cols-4 gap-6 sm:items-center bg-gray-700 text-gray-200 px-4 py-4 text-center'>
        <div>
            <p className={`text-xl`}>Address</p>
            <p>No-2 Bainara, Andherighat</p>
            <p>Darrang, Assam, 784148</p>
        </div>
        
        <div>
            <p className='text-xl'>Contact us:</p>
            <p>Ph. No: +9199xxxxxxxx</p>
            <p>Email: something@gmail.com</p>
        </div>


      <div className='flex flex-col justify-center order-3 sm:order-2 sm:items-center'>
        <p> <Link className='underline font-mono text-indigo-500 hover:text-indigo-600'>Terms & conditions</Link> || <Link className='underline font-mono text-indigo-500 hover:text-indigo-600'>Privacy policy</Link></p>
        <p>&copy;2023 Andherighat High School, All rights reserved.</p>
        <p>Website developed by <Link to="https://codespan.tk">RAJNATH CREATION</Link></p>
      </div>
        
        <div className='flex flex-col gap-2 items-center'>
          <p>Location:</p>
          <iframe className='w-52 xs:w-36 sm:h-20' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d747.3385747122865!2d91.78320295400711!3d26.504409455643344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375ba97d39d36825%3A0xd64b0b984a4f81a5!2sAndherighat%20High%20School%2C%20Simlibari%2C%20Assam%20784148!5e1!3m2!1sen!2sin!4v1689180874246!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </footer>
  )
}

export default Footer