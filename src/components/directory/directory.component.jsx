import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';
import './directoy.styles.scss';

//import SECTIONS_DATA from './sections.data';

const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {
            //otherSectionProps is equiv to adding all the props title, imageUrl, size
                sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);