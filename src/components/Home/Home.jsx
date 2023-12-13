import styles from './Home.module.scss'
import { HomeBlock } from './HomeBlock'

export const Home = ({arrHomeBlocks}) => {
    return (
        <div className={styles.wrapper}>
            {arrHomeBlocks.length !== 0 ? arrHomeBlocks.map((item) => {
                return <HomeBlock key={item.header} blocks={item} />
            }): <p className={styles.text}>Компоненты отсутствуют</p>}
        </div>
    )
}
