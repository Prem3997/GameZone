import React from 'react'
import GameIcon from '../Images/GameIcon'
import HomeIcon from '../Images/HomeIcon'
import Messages from '../Images/Messages'
import Notifications from '../Images/Notifications'
import Progress from '../Images/Progress'
import Settings from '../Images/Settings'
import VerticalIcon from '../Images/VerticalIcon'

const NavigationBar = () => {

  const navLinks = [{
    label: "Home",
    src: <HomeIcon />
  },
  {
    label: "My Games",
    src: <GameIcon />
  },
  {
    label: "Messages",
    src: <Messages />
  },
  {
    label: "Notifications",
    src: <Notifications />
  }, {
    label: "Settings",
    src: <Settings />
  }, {
    label: "Progress",
    src: <Progress />
  }]

  return <>
    {!!navLinks && navLinks.map(link =>
      <nav key={link.label} className="w-auto mx-auto pb-1.5 ml-0 flex flex-row gap-3 items-center group"
      >
        <VerticalIcon />
        {link.src}
        <p className="text-gray-500 text-xl font-medium group-hover:cursor-pointer group-hover:text-white">{link.label}</p>
      </nav>)}
  </>
}

export default NavigationBar
