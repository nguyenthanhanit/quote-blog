import type {NextPage} from 'next';
import Content from "../components/Content";
import Image from 'next/image'
import ViewSource from '../components/ViewSource'
import styles from '../styles/home.module.css'

const Home: NextPage = () => (
  <div>
    <ViewSource pathname="nguyenthanhanit"/>
    <div className={styles.bgWrap}>
      <Image
        alt="Mountains"
        src="/caricature-5268734_1920.jpeg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <Content />
  </div>
)

export default Home