import React from 'react'
import Homecard from '../components/Homecard'
export default function Home() {
    return (
        <> 
            <div className='container border border-1 rounded mb-3' >
                <h4 className='mt-2 text-primary'>Fashion's Top Deals</h4>
                <Homecard
                    category="women's clothing"
                />
            </div>
            <div className='container border border-1 rounded mb-3'>
                <h4 className='mt-2 text-primary'>Best Of Electronics</h4>
                <Homecard
                    category='electronics'
                />
            </div>
            <div className='container border border-1 rounded mb-3'>
                <h4 className='mt-2 text-primary'>Top Deals</h4>
                <Homecard
                    category='jewelery'
                />
            </div>
        </>
    )
}
