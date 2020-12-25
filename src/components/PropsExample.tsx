import React from 'react';

type Props = {
    /** a simple username */
    name?: string;
    /** standard children prop: accepts any valid React Node */
    children: React.ReactNode;
    /** callback function */
    onClick: () => void
};

const PropsExample: React.FC<Props> = (
    {
        name = 'User',
        children,
        onClick
    }: Props) => {

    return (<div>
        Hello world, {name}! <br />
        Children Content: {children} <br />
        <button onClick={onClick}>onClick callback</button>
    </div>);
};

export default PropsExample;