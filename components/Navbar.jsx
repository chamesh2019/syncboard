import Link from 'next/link'


export default function Navbar() {
  return (
    <nav className='bg-purple-600'>
      <div className='max-w-[1200px] mx-auto flex justify-between items-center py-4 px-2'>
      <Link href={'/'} className='font-extrabold text-4xl text-slate-50'>
        Sync Board.
      </Link>
      <Link href={'/addNewBoard'} className='text-slate-900 capitalize font-semibold px-4 py-2 rounded-md bg-slate-50 hover:bg-slate-100 transition-all hover:scale-105'>
      New board
      </Link>
      </div>
    </nav>
  )
}
