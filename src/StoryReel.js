import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                profileSrc="https://cdn.vox-cdn.com/thumbor/owZ1YlJ7R8lwUvVsFgQiasgbZbA=/0x0:2500x1343/1200x800/filters:focal(1075x288:1475x688)/cdn.vox-cdn.com/uploads/chorus_image/image/60150563/Humans2_Niska3___None_.0.jpg"
                image="https://cdn.vox-cdn.com/thumbor/owZ1YlJ7R8lwUvVsFgQiasgbZbA=/0x0:2500x1343/1200x800/filters:focal(1075x288:1475x688)/cdn.vox-cdn.com/uploads/chorus_image/image/60150563/Humans2_Niska3___None_.0.jpg"
                title="New Movie"
            />
            <Story
                profileSrc="https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg"
                title="Mountain"
            />
            <Story
                profileSrc={"data:image/jpeg;base64,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"}
                title="Cat"
            />
            <Story
                profileSrc={"data:image/jpeg;base64,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"}
                title="Dog"
            />
            <Story
                profileSrc={"https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1026205392%2F0x0.jpg"}
                title="House"
            />
        </div>
    )
}

export default StoryReel
