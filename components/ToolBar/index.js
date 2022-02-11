import Head from 'next/head'
import Image from 'next/image'
import styles from './ToolBar.module.css'

export default function ToolBar() {
  return (
   <div className={styles.toolBar}>
     <ul>
       <li>
         Move
       </li>
     </ul>
   </div>
  )
}