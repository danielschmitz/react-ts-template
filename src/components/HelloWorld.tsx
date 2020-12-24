import React from 'react'

type Props = {
    /** a simple username */
    name?: string;
}

const HelloWorld: React.FC<Props> = ({ name = 'User' }) => {
    return (<div>
        Hello world, {name}!
    </div>)
}

export default HelloWorld