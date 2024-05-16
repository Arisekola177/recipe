
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button, buttonVariants } from "@/components/ui/button"
import {Badge, badgeVariants} from "@/components/ui/badge"

interface Recipe {
  title: string,
  image: string,
  time: number,
  description: string,
  vegan: boolean,
  id: string
}

async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch('http://localhost:4000/recipes')

  // delay response
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return result.json()
}

export default async function Home() {
  const recipes = await getRecipes()
  return (
    <main className="mt-16 text-white">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            recipes.map((recipe) => (
              <Card className="flex flex-col gap-3" key={recipe.id}>
                <CardHeader className="flex flex-row items-center gap-8">
                    <Avatar>
                    <AvatarImage src={`/img/${recipe.image}`} alt="@shadcn" />
                <AvatarFallback>
                  {recipe.title.slice(0,2)}
                </AvatarFallback>
                    </Avatar>
                         
                         <CardTitle className="text-sm">{recipe.title}</CardTitle>
                         <Badge variant='destructive' className="py-3 px-1 animate-bounce">{recipe.time} <span className="">mins</span></Badge>
                       
                </CardHeader>
                <CardContent>
                  <CardDescription>{recipe.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex flex-row items-center justify-between">
                  <Button variant='default'>Read more</Button>
                 
                  {recipe.vegan &&  <Badge variant='secondary'> vegan</Badge> }
               
               </CardFooter>
               </Card>
            ))
          }
       </div>
    </main>
      
  );
}
