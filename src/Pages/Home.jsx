import React from 'react'
import Item from '../components/Item'

const Home = () => {
  return (
    <div>
        <section>
        <div className="gap-8 grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] mx-auto max-w-7xl items-center justify-between px-8 py-8">
           <Item/>
           <Item/>
           <Item/>
           <Item/>
           <Item/>
           <Item/>
           <Item/>
           <Item/>
           <Item/>
           <Item/>
           <Item/>
           <Item/>
           <Item/>
           <Item/>
           <Item/>
           <Item/>
        </div>
      </section>
    
    </div>
  )
}
export default Home