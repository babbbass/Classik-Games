interface ScoreDisplayProps {
  score: number
  total: number
}

export const ScoreDisplay = ({ score, total }: ScoreDisplayProps) => {
  return (
    <div className='text-center p-4'>
      <div className='text-2xl font-bold text-grass'>
        Trouvés: {score} / {total}
      </div>
    </div>
  )
}
