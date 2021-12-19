import React, { useState, useEffect } from 'react'

// Services
import { getAllGroups, updateGroup, deleteGroup } from '../services/postService'

// Components 
import GroupCard from '../components/GroupCard/GroupCard'

const GroupList = (props) => {
  const [groups, setGroups] = useState([])


  const handleDeleteGroup = async (groupId) => {
    try {
      await deleteGroup(groupId)
      setGroups(groups.filter((group) => group._id !== groupId))
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    const fetchAllGroups = async () => {
      const groupData = await getAllGroups()
      setGroups(groupData)
    }
    fetchAllGroups()
    return () => { setGroups([]) }
  }, [])

  return (
    <div className='layout'>
      {groups?.map((group) => (
        <GroupCard
          group={group}
          key={group._id}
          user={props.user}
          handleDeleteGroup={handleDeleteGroup}
        />
      ))}
    </div>
  )
}

export default GroupList