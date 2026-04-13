import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black tracking-tighter">NDL</Link>
        <div className="space-x-8 text-sm font-medium uppercase tracking-widest">
          <Link href="/artists" className="hover:text-gray-400 transition">Artists</Link>
          <Link href="/albums" className="hover:text-gray-400 transition">Albums</Link>
          <Link href="/merch" className="hover:text-gray-400 transition">Merch</Link>
        </div>
      </div>
    </nav>
  );
}