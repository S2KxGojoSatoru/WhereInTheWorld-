
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { promises as fs } from 'fs';
import Link from 'next/link';
import path from 'path';
import CountryDetail from './CountryDetail';
  


const  MainBody = async () => {
    const file = await fs.readFile(process.cwd() + '/data.json', 'utf8');
    const data = JSON.parse(file);

    
    

    
  return (

        <>
        <div className='absolute mt-20 ml-16 mr-16 -z-10'>
            <input type='text'id="searchBar" className='bg-gray-600 text-white border-black font-mono text-sm' placeholder='Enter a Country'/>
            <button className= 'pl-3 bg-black text-white font-mono text-sm'>Search🔍</button>
        </div>
       

        <div className='absolute grid grid-cols-3 gap-8 mt-32 ml-16 mr-16 -z-10'>
            {data.map((eachBlog:any)=>(
            <Card key={eachBlog.name}>
                <CardHeader>
                    <CardTitle>{eachBlog.name}</CardTitle>
                    <CardDescription>{eachBlog.subregion}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Capital: {eachBlog.capital}</p>
                    <p>Population: {eachBlog.population}</p>
                    <p>Region: {eachBlog.region}</p>
                </CardContent>
                <CardFooter>
                    <Button asChild>
                        <Link href={"./Country"}>View More</Link>
                    </Button>
                </CardFooter>
            </Card>
            ))}
        </div>
        </>
  )
}

export default MainBody