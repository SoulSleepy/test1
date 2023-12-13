import { IconWrapper } from './IconWrapper'

export const PointerIcon = ({ fill = 'white' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M11 9L14 12L11 15'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}
