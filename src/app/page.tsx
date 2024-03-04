import styles from '@/app/page.module.css'
import {Row,Col} from 'react-bootstrap'
import LoginForm from './components/login/login'
import Footer from './ui/footer/footer'
const Home =()=>{
  return(
    <Row className={` p-0 m-0   ${styles.homeContainer}`}>
      <Col className={`${styles.formInput}`}>
        <LoginForm/>
      </Col>
      <Col className='p-0 fixed-bottom'>
      <Footer/>
      </Col>
    </Row>
  )
}
export default Home