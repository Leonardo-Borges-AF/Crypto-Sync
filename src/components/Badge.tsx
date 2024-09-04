type TProps = {
  text: 'Coming Soon' | 'NOTÍCIAS' | 'Soon'
  className?: string
}
export const Badge = ({ text, className }: TProps) => {
  const mapColors = {
    'Coming Soon': 'bg-[#2B8A3E] text-[#2B8A3E]',
    Soon: 'bg-[#2B8A3E] text-[#2B8A3E]',
    NOTÍCIAS: 'bg-[#442B8A] bg-opacity-20 text-[#642EFD]',
  }

  return (
    <span
      className={`text-xs ${mapColors[text]} bg-opacity-20 px-3 py-2 rounded-full w-fit ${className} text-nowrap`}
    >
      {text}
    </span>
  )
}
