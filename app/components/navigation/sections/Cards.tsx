import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Check } from "lucide-react"

interface PlanProps {
  title: string
  description: string
  features: string[]
  currency? : string
}

type CardProps = React.ComponentProps<typeof Card> & { plan: PlanProps }

export function Cards({ className, plan, ...props }: CardProps) {
  return (
    <Card className={cn("w-fit hover:opacity-35 cursor-pointer bg-transparent hover:scale-110 transition-transform duration-300", className)} {...props}>
      <CardHeader>
        <CardTitle>{plan.title}</CardTitle>
        <CardDescription>{plan.description}<span className="opacity-55 mr-2">{plan.currency}</span></CardDescription>
      </CardHeader>
      <CardContent className="grid">
        <div>
          {plan.features.map((feature, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span />
              <div className="flex flex-row ">
              <div className='w-fit h-fit rounded-full m- bg-[#1AC080]'> <Check /> </div>
                <p className="text-sm mr-4 pr-2 font-medium ">{feature}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex w-full justify-center items-center">
        <Button className="w-2/3 bg-gray-900 text-extrabold rounded-full cursor-pointer hover:opacity-80 border-2 border-white">
          اشترك
        </Button>
      </CardFooter>
    </Card>
  )
}
