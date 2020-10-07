import React, { Dispatch, SetStateAction } from 'react';
import Div from './recruitmentTree.styled';
import RecruitmentPoint from './recruitmentPoint';
import { recruitmentProcesses, recruitmentProcess } from '../../../textContent/careers';


const RecruitmentTree = (props: props) => {
    
    const renderChildren = () => recruitmentProcesses.map(({ name }, i) => 
        <RecruitmentPoint key={ i } name={ name } handleClick={ props.changeRecruitmentProcess } />)
    
    return (
        <Div>
            { renderChildren() }
        </Div>
    )
}

interface props {
    changeRecruitmentProcess: Dispatch<SetStateAction<recruitmentProcess>>
}

export default RecruitmentTree;