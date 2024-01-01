import Link from 'next/link';
import { movieData } from '../services/MovieData'


// export const getData =async ()=>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   return res.json();
// }


export default async function Home() {
  // const data = await getData();
  // console.log(data);
  const popularFilm = await movieData();
  // console.log(popularFilm);
  // await movieData()


  return (
    <div>
      <Link href='/hakkimizda'>Hakkımızda</Link>
      <br />
      <Link href='/docs/products/random1' >random</Link>
      <br />
      <Link href={{
        pathname: "/hakkimizda",
        query: {
          name: "Next.js",
          surname: "ff",
        },
      }}>Hakkımızda obje ile</Link>
      <div style={{ display: "flex" }}>
        {popularFilm?.map((item, i) => (
          <div key={i}>
            <h1>{item.l}</h1>
            <h1>{item.q}</h1>
            {/* <h3>{item.i.height}</h3> */}
            <img width={"200px"} src={item.i?.imageUrl} alt="image" />
            <Link href={`/docs/${item.id}`} >random</Link>
          </div>
        )
        )}
      </div>

    </div>

  )
}
