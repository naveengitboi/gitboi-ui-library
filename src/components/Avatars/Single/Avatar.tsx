import React from 'react'
import styled from 'styled-components'
import { commonProps, commonStyles } from '../../../Styles/CommonStyledProps'


const GroupWrapper = styled.div<AvatarProps>`
    display: flex;
    ${commonStyles}
    position: relative;

`
const AvatarWrapper = styled.div<AvatarProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    &>img{
        object-fit: cover;
        width: 100%;
        border-radius: 50%;
        height: 100%;
    }
    
    ${commonStyles}
`

const OverlapAvatars = styled.div<AvatarProps>`
    display: flex;
    position: relative;
    left: 0;
    width: 20px;
    ${AvatarWrapper} {
        position: absolute;
        &:nth-child(1){
            z-index: 3;
            left: ${props => props.distance ? props.distance : ''}px;

        }
        &:nth-child(2){
            z-index: 2;
            left: ${props => props.distance ? props.distance : ''}px;
        }
        &:nth-child(3){
            z-index: 1;
        }
        
    }
`

interface AvatarProps extends commonProps{
    distance?: string;
}

const Avatar = (props:AvatarProps) => {
    return(
        <div>
            {/* in progress */}
            <OverlapAvatars >
                <AvatarWrapper {...props} >
                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202405/664ad789da2a6-sundar-pichai-280734526-16x9.jpg" alt="profile" />
                </AvatarWrapper>
                <AvatarWrapper {...props}>
                    <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202405/664ad789da2a6-sundar-pichai-280734526-16x9.jpg" alt="profile" />
                </AvatarWrapper>
                <AvatarWrapper {...props}>
                    <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202405/664ad789da2a6-sundar-pichai-280734526-16x9.jpg" alt="profile" />
                </AvatarWrapper>
                
            </OverlapAvatars>
            <GroupWrapper gapBw={5}>
                <AvatarWrapper {...props}>
                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202405/664ad789da2a6-sundar-pichai-280734526-16x9.jpg" alt="profile" />
                </AvatarWrapper>
                <AvatarWrapper {...props}>
                    <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202405/664ad789da2a6-sundar-pichai-280734526-16x9.jpg" alt="profile" />
                </AvatarWrapper>
                <AvatarWrapper {...props}>
                    <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202405/664ad789da2a6-sundar-pichai-280734526-16x9.jpg" alt="profile" />
                </AvatarWrapper>
            </GroupWrapper>
            
        </div>
    )
}


export default Avatar