interface ScoreDisplayProps {
  score: number
  total: number
}

export const ScoreDisplay = ({ score, total }: ScoreDisplayProps) => {
  return (
    <div className='text-center'>
      <div className='text-2xl font-bold text-grass'>
        Trouvés: {score} / {total}
      </div>
    </div>
  )
}
