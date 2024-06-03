import React from 'react'
import Navbar from '../components/Utility/Navbar'
import  './Style.css'

export default function About() {
  return (
    <>
    <div id='about' >

    <Navbar/>
    <div className='about'>
    <h1>Steps To Check Plagiarism:-</h1>
    <h3><li>Create Account or Log in if account already exists </li></h3>
    <h3><li>Create Your Research Paper </li></h3>
    <h3><li>Click On Check For Plagiarism Button </li></h3>
    <h3><li>Check For Level 0 Plagiarism </li></h3>
    <h3><li>Check For Level 1 Plagiarism ,if applicable</li></h3>
    <h3><li>Look For Plagiarism Report Generated</li></h3>
    <h3><li>Edit Your paper and check again,if plag is found</li></h3>
    </div>
    </div>
    </>
  )
}
