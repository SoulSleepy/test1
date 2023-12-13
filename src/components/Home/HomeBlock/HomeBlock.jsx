import { PointerIcon } from '../../../helpers/icons/Icons'
import styles from './HomeBlock.module.scss'

export const HomeBlock = ({blocks}) => {

    return (
        <div className={styles.block}>
            <h1>{blocks.header}</h1>
            <div className={styles.list}>
                {blocks.options.map((item) => {
                    return (
                        <div key={item} className={styles.listItem}>
                            <PointerIcon />
                            <p>{item}</p>
                        </div>
                    )
                })}
            </div>
            <p className={styles.text}>{blocks.text}</p>
        </div>
    )
}
