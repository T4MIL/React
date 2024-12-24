import React from 'react'
import Card from '../components/Card';
export default function Fashion() {
  return (
    <>
      <div className='container border border-1 rounded mb-3'>
        <h3 className='mt-2 text-primary'>Men's Clothing</h3>
        <Card category="men's clothing" />
      </div>
      <div className='container border border-1 rounded mb-3'>
        <h3 className='mt-2 text-primary'>Women's Clothing</h3>
        <Card category="women's clothing" />
      </div>
    </>
  )
}
