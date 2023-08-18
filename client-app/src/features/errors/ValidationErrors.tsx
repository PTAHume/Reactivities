import { Message } from "semantic-ui-react"

export const ValidationErrors = ({ errors }: { errors: string[] }) => {
    return (
        <Message error>
            {errors && (
                <Message.List>
                    {errors.map((error: string, i) => {
                        return (<Message.Item key={error}>
                            {error}
                        </Message.Item>
                        )
                    })}
                </Message.List>
            )}
        </Message>
    )
}