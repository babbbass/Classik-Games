import { formations } from "@/components/Formations"
import { capitalizeWords } from "@/lib/utils"
import {
  WIDTH_FIELD,
  HOME,
  AWAY,
  BREAK_WIDTH_MOBILE_OR_TABLET,
} from "@/utils/constants"
import { Field } from "./Field"

export const SoccerField = ({ guessedPlayers, teams }) => {
  const homeFormation = formations.home[teams.home.formation]
  const awayFormation = formations.away[teams.away.formation]
  return (
    <article className='mt-4'>
      <svg
        id='Layer_4'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        x='0px'
        y='0px'
        viewBox='0 0 2560 1600'
        enableBackground='new 0 0 2560 1600'
        xmlSpace='preserve'
        className={`w-full h-full
 transition-transform duration-300 
   -rotate-90 mt-[50%] mb-[50%] scale-150 md:rotate-0 md:scale-100 md:mt-0 md:mb-0
 `}
      >
        <Field />
        <text
          x={WIDTH_FIELD * 0.25}
          y={70}
          textAnchor='middle'
          dominantBaseline='middle'
          fill='#FFD700'
          fontSize='60'
          className='font-bold'
        >
          {teams.home.formation}
        </text>
        <text
          x={WIDTH_FIELD * 0.75}
          y={70}
          textAnchor='middle'
          dominantBaseline='middle'
          fill='#FFD700'
          fontSize='60'
          className='font-bold '
        >
          {teams.away.formation}
        </text>

        {guessedPlayers.map((player, index) => {
          const position =
            player.team === HOME
              ? homeFormation[player.position]
              : awayFormation[player.position]
          const HomeSubstitutePositionForMobileOrTablet =
            window.innerWidth < BREAK_WIDTH_MOBILE_OR_TABLET &&
            player.team === HOME &&
            player.position.match(/^sub/i)
          const AwaySubstitutePostitionForMobileOrTablet =
            window.innerWidth < BREAK_WIDTH_MOBILE_OR_TABLET &&
            player.team === AWAY &&
            player.position.match(/^sub/i)

          if (!position) return null

          return (
            <g
              key={`${player.name}-${index}`}
              transform={`rotate(90, ${position.x}, ${position.y})`}
              className='md:rotate-0'
            >
              {player.position.match(/^(?!sub)/i) && (
                <>
                  <circle
                    cx={position.x}
                    cy={position.y}
                    r='65'
                    fill={
                      player.team === HOME ? teams.home.color : teams.away.color
                    }
                    stroke='white'
                    strokeWidth='2'
                  />
                  {player.picture ? (
                    <image
                      href={`${
                        process.env.NEXT_PUBLIC_PICTURES_URL
                      }${player.picture.toLowerCase()}`}
                      x={position.x - 50}
                      y={position.y - 50}
                      width='100'
                      height='100'
                      alt={`joueur ${player.team} ${player.name}`}
                    />
                  ) : (
                    <text
                      x={position.x}
                      y={position.y}
                      textAnchor='middle'
                      dominantBaseline='middle'
                      fill='white'
                      fontSize='45'
                      className='absolute font-bold transition-transform duration-300'
                    >
                      {position.position}
                    </text>
                  )}
                </>
              )}
              {}
              <text
                x={
                  HomeSubstitutePositionForMobileOrTablet
                    ? position.x +
                      player.position.toLowerCase().split("sub")[1] * 60 -
                      15
                    : AwaySubstitutePostitionForMobileOrTablet
                    ? position.x +
                      player.position.toLowerCase().split("sub")[1] * 60
                    : position.x //classic position
                }
                y={
                  AwaySubstitutePostitionForMobileOrTablet
                    ? position.y +
                      player.position.toLowerCase().split("sub")[1] * 60 -
                      80
                    : HomeSubstitutePositionForMobileOrTablet
                    ? position.y -
                      player.position.toLowerCase().split("sub")[1] * 60 +
                      95
                    : window.innerWidth < BREAK_WIDTH_MOBILE_OR_TABLET &&
                      player.team === AWAY
                    ? position.y - 95
                    : position.y + 95 //classic position
                }
                textAnchor='middle'
                dominantBaseline='middle'
                fill='black'
                fontSize='44'
                className='font-bold'
              >
                {capitalizeWords(player.name)}
              </text>
            </g>
          )
        })}
      </svg>
    </article>
  )
}
