import Title from 'components/Title'
import { FC } from 'react'

const Custom404: FC<{ message?: string }> = ({ message }) => {

    return (
        <div className="page">
            <Title>404 Not Found</Title>
            <h1>404 - Page not found!</h1>
            <p>{message}</p>
        </div>
    )
}
export default Custom404