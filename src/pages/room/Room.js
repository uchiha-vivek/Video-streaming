import React from 'react'
 
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
import { useParams } from 'react-router-dom'
import './room.css'



const  Room = () => {
    const {roomId} = useParams()

    const meet = async(element) =>{
        const appID = 421797289;
        const serverSecret="c07c336bb27c9f0c06a20c67b3d67363";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId, Date.now().toString(),'vivek')
    const zip = ZegoUIKitPrebuilt.create(kitToken)
    zip.joinRoom({
        container:element,
        mode:ZegoUIKitPrebuilt.VideoConference
    })
    }
    return (

        <>

        <div className='room-page'><div ref={meet}/></div>
        </>
    )
}

export default Room