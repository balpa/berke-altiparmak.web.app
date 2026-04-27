import React from 'react'
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiFillGithub,
} from 'react-icons/ai'

const links = [
  { href: 'https://www.github.com/balpa', label: 'GitHub', Icon: AiFillGithub },
  { href: 'https://www.instagram.com/berkealtiparmakk', label: 'Instagram', Icon: AiOutlineInstagram },
  { href: 'https://www.linkedin.com/in/berkealtiparmak/', label: 'LinkedIn', Icon: AiOutlineLinkedin },
  { href: 'https://www.youtube.com/berkealtiparmak', label: 'YouTube', Icon: AiOutlineYoutube },
]

function SocialLinks() {
  return (
    <div className="socialmedia-container">
      <div id="icons-container">
        {links.map(({ href, label, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
            <Icon />
          </a>
        ))}
      </div>
      <div id="empty-line" aria-hidden="true"></div>
    </div>
  )
}

export default SocialLinks
