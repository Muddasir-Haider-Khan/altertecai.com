import type { FC } from "react"

interface Iprops {
  header: string
  desc: string
  number: number
  haveborder?: boolean
}

const Phases: FC<Iprops> = ({ header, desc, number, haveborder = true }) => {
  return (
    <div
      className={`rounded-md cursor-pointer px-8 py-16 relative flex-1 flex flex-col justify-center hover:shadow-lg transition-shadow duration-300 ${haveborder && "border border-border"}`}
    >
      <h4 className="font-bold text-lg text-foreground">{header}</h4>
      <p className="mt-2 text-muted-foreground z-10">{desc}</p>

      <div className="absolute text-muted/20 -top-6 right-10 text-[170px] font-bold select-none">{number}</div>
    </div>
  )
}

export default Phases
