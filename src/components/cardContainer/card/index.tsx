import { CardStyles } from './styles'

interface CardProps {
    color: string;
  }

export const Card = ({ color, ...props }: CardProps) =>{
    return(
        <>
            <CardStyles>
                <div className={color + ' card'}>
                </div>
            </CardStyles>
        </>
    )
}