import React from 'react';
import PropTypes from 'prop-types';

interface Props {
    data:any,
    markRead:any,
    delItem:any
}

const Headline:React.FC<Props> = (props) => {
    
    // Object destructuring, so we don't have to keep referencing this.props.data
    const {id, title, content, checked} = props.data;

    let titleHTML;
    if(checked) {
        titleHTML = <s>{title}</s>;
    } else {
        titleHTML = <strong>{title}</strong>;
    }

    const clickCheckbox = () => {
        props.markRead(id);
    }

    const clickDelete = () => {
        props.delItem(id)
    }

    return (
        <div>
            <input type="checkbox" onChange={clickCheckbox} />
            <button onClick={clickDelete}>X</button>
            <p>
                {titleHTML}
            </p>
            <p>{content}</p>
        </div>
    )
}

Headline.propTypes = {
    data: PropTypes.object.isRequired,
    markRead: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired
}

export default Headline;