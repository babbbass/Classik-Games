interface ScoreDisplayProps {
  score: number
  total: number
}

export const ScoreDisplay = ({ score, total }: ScoreDisplayProps) => {
  return (
    <div className='w-fit text-lg mx-auto text-slate-50 bg-blue-800 rounded-3xl p-3 mt-4 text-center'>
      Trouvés: {score} / {total}
    </div>
  )
}
