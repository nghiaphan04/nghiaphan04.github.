'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Icon } from '@iconify/react';
import styles from './nav.module.css'
import Link from 'next/link';
import { useState } from 'react';
function NavBar() {
  const [isLogin,setIsLogin]= useState(true)
  return (
    <Navbar expand="sm" className={`${styles.bgNav}`} >
      <Container className='m-0 p-0 ' fluid>
          <Link href="/home" className='my-2 d-flex'>
           <Icon icon="fa:home" className={`${styles.iconHome} text-white  `} />
          <div className={`text-white ms-1 ${styles.textHome}`} >HOME</div>
          </Link>
          { isLogin &&
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav p-0 m-0" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link href="/contestsToday" className={`${styles.linkItem} d-flex `}>
                <Icon icon="healthicons:i-exam-multiple-choice"  className={`${styles.iconFormat} text-white my-auto mx-0`} />
                <div  className={`${styles.text} text-white  text-center`}>CUỘC THI HÔM NAY</div>
                </Link>
                <Link href="/contestsNext" className={`${styles.linkItem} d-flex `}>
                <Icon icon="healthicons:i-exam-multiple-choice" className={`${styles.iconFormat} text-white my-auto mx-0`}/>
                <span className={`${styles.text} text-white  text-center`} >CUỘC THI SẮP TỚI</span>
                </Link>  
            </Nav>
            <span className=" float-right " >
                <Link href="/user">
                     <Icon icon="lets-icons:user-fill" className={`${styles.iconFormat} text-white me-2`} />
                </Link>
            </span>
            </Navbar.Collapse>
          </>
          }
      </Container>
    </Navbar>
  );
}

export default NavBar;