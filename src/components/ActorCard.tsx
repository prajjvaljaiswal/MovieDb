import { Cast } from '@/type/movie'
import { Card, CardContent } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

interface ActorCardProps {
    // actor: {
    //   id: number
    //   name: string
    //   character: string
    //   profile_path: string
    //   bio?: string
    // }
    actor: Cast
  }

const ActorCard = ({actor}: ActorCardProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className={"group border-0 bg-zinc-800/50 transition-colors hover:bg-zinc-800"}>
          <CardContent className="p-0">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}` || "/placeholder.svg"}
                alt={actor.name}
                width={300}
                height={400}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <div className="space-y-1 p-3">
              <h3 className="text-sm font-medium text-white line-clamp-1">{actor.name}</h3>
              <p className="text-sm text-zinc-400 line-clamp-1">{actor.character}</p>
            </div>
          </CardContent>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-zinc-900 border-zinc-800 text-zinc-100" sideOffset={5}>
        <div className="flex gap-4">
          <div className="w-20 h-20 rounded-md overflow-hidden shrink-0">
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}` || "/placeholder.svg"}
              alt={actor.name}
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-zinc-100">{actor.name}</h4>
            <p className="text-sm text-zinc-400">{actor.character}</p>
            {/* {actor?.bio && <p className="text-sm text-zinc-300 line-clamp-3">{actor.bio}</p>} */}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default ActorCard