import React from 'react';
import { StyledCell } from './styles/styledcell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
    <StyledCell type = {type} color={TETROMINOS[type].color}>
    </StyledCell>
)

export default React.memo(Cell);