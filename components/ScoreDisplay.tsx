interface ScoreDisplayProps {
  score: number
  total: number
}

export const ScoreDisplay = ({ score, total }: ScoreDisplayProps) => {
  return (
    <div className='w-fit text-2xl mx-auto font-semibold text-slate-50 bg-blue-800 rounded-3xl p-4 text-center'>
      Joueurs: {score} / {total}
    </div>
  )
}
