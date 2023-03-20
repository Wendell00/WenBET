import { CardStyles } from './styles'

interface CardProps {
    color: string;
  }

export const Card = ({ color = 'defaultCard', ...props }: CardProps) =>{
    return(
        <>
            <CardStyles>
                <div className={color + ' card'}>
                </div>
            </CardStyles>
        </>
    )
}