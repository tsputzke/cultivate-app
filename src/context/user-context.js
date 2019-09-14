import React from 'react'

export default React.createContext({
  user_id: '',
  user_name: '',
  room_id: '',
  room_name: '',
  rooms: [],
  updateLoggedUser: () => {},
  updateUserRooms: () => {},
  updateRoom: () => {},
})