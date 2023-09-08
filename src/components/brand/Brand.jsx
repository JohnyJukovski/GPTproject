import React from 'react'
import './brand.css'
import{shopify,dropbox,atlassian, slask,google} from './imports'

const Brand = () => {
  return (
<div className='gpt3__brand section__padding'>
  <div>
    <img src={google} alt='google'/>
  </div>
  <div>
    <img src={dropbox} alt='dropbox'/>
  </div>
  <div>
    <img src={shopify} alt='shopify'/>
  </div>
  <div>
    <img src={atlassian} alt='atlassian'/>
  </div>
  <div>
    <img src={slask} alt='slask'/>
  </div>
</div>  )
}

export default Brand