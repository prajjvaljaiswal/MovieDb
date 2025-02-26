import { Button } from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("")
  return (
    <header className="border-b border-zinc-800">
    <div className="container mx-auto px-4">
      <div className="flex h-16 items-center justify-between text-xl font-bold text-white">
        
        <Link to="/">MovieDb</Link>

        <nav className="hidden space-x-6 md:flex">
          <Link to="/popular" className="text-zinc-400 hover:text-white">
            Popular
          </Link>
          <Link to="/top-rated" className="text-zinc-400 hover:text-white">
            Top Rated
          </Link>
          <Link to="/upcoming" className="text-zinc-400 hover:text-white">
            Upcoming
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Input
            type="text"
            placeholder="Movie Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[200px] bg-zinc-800 text-white placeholder:text-zinc-400 focus-visible:ring-zinc-700"
          />
          <Button variant="secondary" size="icon">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>
    </div>
  </header>
  )
}
