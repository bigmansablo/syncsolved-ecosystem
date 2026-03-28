import { type ComponentPropsWithoutRef, type ReactNode } from "react"
import { ArrowRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  Icon: React.ElementType
  description: string
  href: string
  cta: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden",
      "bg-black border border-white/10",
      className
    )}
    {...props}
  >
    <div className="absolute inset-0 z-0">{background}</div>
    <div className="p-6 relative z-10">
      <div className="z-10 flex transform-gpu flex-col gap-1 transition-all duration-300">
        <Icon className="h-12 w-12 origin-left transform-gpu text-accent transition-all duration-300 ease-in-out group-hover:scale-110" />
        <h3 className="text-xl font-bold text-white uppercase tracking-tighter mt-4">
          {name}
        </h3>
        <p className="max-w-lg text-white font-medium leading-relaxed mt-2">{description}</p>
      </div>

      <div
        className={cn(
          "pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden"
        )}
      >
        <Button
          variant="link"
          render={<a href={href} />}
          size="sm"
          className="pointer-events-auto p-0 text-accent"
        >
          {cta}
          <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
        </Button>
      </div>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex z-10"
      )}
    >
      <Button
        variant="link"
        render={<a href={href} />}
        size="sm"
        className="pointer-events-auto p-0 text-accent"
      >
        {cta}
        <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
      </Button>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-accent/5" />
  </div>
)

export { BentoCard, BentoGrid }
