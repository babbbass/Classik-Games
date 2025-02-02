import * as React from "react"
import { formations } from "@/components/Formations"
import { capitalizeWords } from "@/lib/utils"
import { WIDTH_FIELD, HEIGHT_FIELD } from "@/utils/constants"

export const SoccerField = ({ guessedPlayers, teams }) => {
  const homeFormation = formations.home[teams.home.formation]
  const awayFormation = formations.away[teams.away.formation]
  return (
    <div className='mt-4'>
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
        <g>
          <rect fill='#278406' width={WIDTH_FIELD} height={HEIGHT_FIELD} />
          <g>
            <rect
              x={20.8333}
              y={24.35}
              fill='#4D8200'
              width={2518.3335}
              height={1551.3}
            />
            <rect
              x={20.8333}
              y={24.35}
              fill='#1A6F05'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={90.3398}
              y={24.35}
              fill='#558907'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={159.8463}
              y={24.35}
              fill='#1A6F05'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={229.3528}
              y={24.35}
              fill='#558907'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={298.8593}
              y={24.35}
              fill='#1A6F05'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={368.3658}
              y={24.35}
              fill='#558907'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={437.8723}
              y={24.35}
              fill='#1A6F05'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={507.3788}
              y={24.35}
              fill='#558907'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={576.8854}
              y={24.35}
              fill='#1A6F05'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={646.3918}
              y={24.35}
              fill='#558907'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={715.8983}
              y={24.35}
              fill='#1A6F05'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={785.4048}
              y={24.35}
              fill='#558907'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={854.9114}
              y={24.35}
              fill='#1A6F05'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={924.4178}
              y={24.35}
              fill='#558907'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={993.9243}
              y={24.35}
              fill='#1A6F05'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={1063.4308}
              y={24.35}
              fill='#558907'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={1132.9373}
              y={24.35}
              fill='#1A6F05'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={1202.4438}
              y={24.35}
              fill='#558907'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={1271.9503}
              y={24.35}
              fill='#1A6F05'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={1341.4568}
              y={24.35}
              fill='#558907'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={1410.9633}
              y={24.35}
              fill='#1A6F05'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={1480.4698}
              y={24.35}
              fill='#558907'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={1549.9763}
              y={24.35}
              fill='#1A6F05'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={1619.4828}
              y={24.35}
              fill='#558907'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={1688.9893}
              y={24.35}
              fill='#1A6F05'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={1758.4958}
              y={24.35}
              fill='#558907'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={1828.0023}
              y={24.35}
              fill='#1A6F05'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={1897.5088}
              y={24.35}
              fill='#558907'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={1967.0153}
              y={24.35}
              fill='#1A6F05'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={2036.5219}
              y={24.35}
              fill='#558907'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={2106.0283}
              y={24.35}
              fill='#1A6F05'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={2175.5349}
              y={24.35}
              fill='#558907'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={2245.0415}
              y={24.35}
              fill='#1A6F05'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={2314.5479}
              y={24.35}
              fill='#558907'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={2384.0544}
              y={24.35}
              fill='#1A6F05'
              width={68.987}
              height={1551.3}
            />
            <rect
              x={2453.5608}
              y={24.35}
              fill='#558907'
              width={81.7075}
              height={1551.3}
            />
          </g>
          <g>
            <g>
              <rect
                x={26}
                y={26}
                fill='none'
                stroke='#FFFFFF'
                strokeWidth={5.6591}
                strokeMiterlimit={10}
                width={1254}
                height={1544}
              />
              <path
                fill='none'
                stroke='#FFFFFF'
                strokeWidth={8}
                strokeMiterlimit={10}
                d='M1280,1570V26V1570z'
              />
              <polyline
                fill='none'
                stroke='#FFFFFF'
                strokeWidth={8}
                strokeMiterlimit={10}
                points='26,1271 461,1271 461,328 26,328  '
              />
              <polyline
                fill='none'
                stroke='#FFFFFF'
                strokeWidth={8}
                strokeMiterlimit={10}
                points='26,559 181,559 181,1039 26,1039  '
              />
              <path
                fill='none'
                stroke='#FFFFFF'
                strokeWidth={8}
                strokeMiterlimit={10}
                d='M461,612c174,21,232,308,0,379'
              />
              <path
                fill='none'
                stroke='#FFFFFF'
                strokeWidth={8.1713}
                strokeMiterlimit={10}
                d='M1279,563 c-131.72,0-238.5,106.7801-238.5,238.5S1147.28,1040,1279,1040'
              />
              <path
                fill='#FFFFFF'
                stroke='#FFFFFF'
                strokeWidth={2}
                strokeMiterlimit={10}
                d='M1280,782c-9.9412,0-18,8.0589-18,18 s8.0588,18,18,18'
              />
              <path
                fill='none'
                stroke='#FFFFFF'
                strokeWidth={5.6591}
                strokeMiterlimit={10}
                d='M25.75,1527.25 c23.6311,3.5717,36.4116,17.5588,37,43.25'
              />
              <path
                fill='none'
                stroke='#FFFFFF'
                strokeWidth={5.6591}
                strokeMiterlimit={10}
                d='M25.6666,65.8333 C47.3918,64.3687,60.5861,51.7107,63.8334,26'
              />
              <circle
                fill='#FFFFFF'
                stroke='#FFFFFF'
                strokeWidth={2}
                strokeMiterlimit={10}
                cx={290.5}
                cy={798.25}
                r={19}
              />
            </g>
            <g>
              <rect
                x={1282.6666}
                y={26}
                fill='none'
                stroke='#FFFFFF'
                strokeWidth={5.6591}
                strokeMiterlimit={10}
                width={1254}
                height={1544}
              />
              <path
                fill='none'
                stroke='#FFFFFF'
                strokeWidth={8}
                strokeMiterlimit={10}
                d='M1282.6666,1570V26V1570z'
              />
              <polyline
                fill='none'
                stroke='#FFFFFF'
                strokeWidth={8}
                strokeMiterlimit={10}
                points='2536.6667,1271 2101.6667,1271  2101.6667,328 2536.6667,328  '
              />
              <polyline
                fill='none'
                stroke='#FFFFFF'
                strokeWidth={8}
                strokeMiterlimit={10}
                points='2536.6667,559 2381.6667,559  2381.6667,1039 2536.6667,1039  '
              />
              <path
                fill='none'
                stroke='#FFFFFF'
                strokeWidth={8}
                strokeMiterlimit={10}
                d='M2101.6667,612c-174.0001,21-232.0001,308,0,379'
              />
              <path
                fill='none'
                stroke='#FFFFFF'
                strokeWidth={8.1713}
                strokeMiterlimit={10}
                d='M1283.6666,563 c131.72,0,238.5,106.7801,238.5,238.5s-106.78,238.5-238.5,238.5'
              />
              <path
                fill='#FFFFFF'
                stroke='#FFFFFF'
                strokeWidth={2}
                strokeMiterlimit={10}
                d='M1282.6666,782c9.9412,0,18,8.0589,18,18 s-8.0588,18-18,18'
              />
              <path
                fill='none'
                stroke='#FFFFFF'
                strokeWidth={5.6591}
                strokeMiterlimit={10}
                d='M2536.9167,1527.25 c-23.6311,3.5717-36.4116,17.559-37,43.25'
              />
              <path
                fill='none'
                stroke='#FFFFFF'
                strokeWidth={5.6591}
                strokeMiterlimit={10}
                d='M2537,65.8333 c-21.7251-1.4646-34.9194-14.1226-38.1667-39.8333'
              />
              <circle
                fill='#FFFFFF'
                stroke='#FFFFFF'
                strokeWidth={2}
                strokeMiterlimit={10}
                cx={2272.1667}
                cy={798.25}
                r={19}
              />
            </g>
          </g>
        </g>
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
            player.team === "home"
              ? homeFormation[player.position]
              : awayFormation[player.position]

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
                      player.team === "home"
                        ? teams.home.color
                        : teams.away.color
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
              <text
                x={position.x}
                y={
                  window.innerWidth >= 768
                    ? position.y + 95
                    : player.team === "home"
                    ? position.y + 95
                    : position.y - 95
                }
                textAnchor='middle'
                dominantBaseline='middle'
                fill='black'
                fontSize='44'
                className='font-bold'
                // transform={`rotate(-90, ${position.x}, ${position.y + 95})`}
              >
                {capitalizeWords(player.name)}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
