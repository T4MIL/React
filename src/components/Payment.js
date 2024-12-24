import React, { useState } from 'react'
import Newmodal from './Newmodal'
import Newmodal1 from './Newmodal1'
import Newmodal2 from './Newmodal2'
export default function Payment() {
    const [mod, setMod] = useState('')
    console.log(mod)
    return (
        <>
            <div className='container  border border-1 rounded mb-3'>
                <div className='row mt-3'>
                    <h3 className='text-primary'>Payment Methods</h3>
                    <div className='col-lg-12 mb-5 mt-4'>
                        <div className='d-flex gap-4 justify-content-center'>
                            <button onClick={() => setMod('modal1')} className='btn btn-warning'>Scan</button>
                            {
                                mod === 'modal1' ? <Newmodal str1={true} fn={setMod}></Newmodal> : null
                            }
                            <button className='btn btn-warning ' onClick={() => setMod('modal2')}>Cash On Delivery</button>
                            {
                                mod === 'modal2' ? <Newmodal1 str1={true} fn={setMod}></Newmodal1> : null
                            }
                            <button className='btn btn-warning' onClick={() => setMod('modal3')}>Card</button>
                            {
                                mod === 'modal3' ? <Newmodal2 str1={true} fn={setMod}></Newmodal2> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
