import Head from 'next/head'
import Image from 'next/image'
import styles from './VariantMenu.module.css'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

let VariantCard = () => {
  return <li className={styles.variantCard}>
  <div className={styles.variantImg}></div>
  <div className={styles.variantDetails}>
    <p className={styles.variantName}>Background</p>
    
  </div>
</li>
}


export default function VariantMenu() {
  return (
   <div>
     <ul className={styles.container}>
      <VariantCard/>
      <li className={styles.variantCard}>
 
  <div className={styles.variantDetails}>
    <p className={styles.variantName}>Background</p>
    
  </div>
</li>
     </ul>
   </div>
  )
}