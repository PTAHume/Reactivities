import { Dimmer, Loader } from "semantic-ui-react"

export const LoadingComponent = (
    {
        inverted = true,
        content = "Loading..."
    }:
        {
            inverted?: boolean,
            content?: string
        }
) => {
    return (
        <Dimmer inverted={inverted} active={true}>
            <Loader content={content} />
        </Dimmer>
    )
}