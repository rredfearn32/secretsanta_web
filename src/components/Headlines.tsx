import React from 'react';
import PropTypes from 'prop-types';

import Headline from './Headline';

interface Props {
    headlines: any,
    markRead: any,
    delItem: any
}

const Headlines:React.FC<Props> = (props:any) => {
    
    return props.headlines.map((headline:any) => (
        <Headline key={headline.id} markRead={props.markRead} delItem={props.delItem} data={headline}></Headline>
    ));
}

// Sets required fields
Headlines.propTypes = {
    headlines: PropTypes.array.isRequired,
    markRead: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired
}

export default Headlines;