import React, { useEffect, useState } from 'react'
import { db } from './firebase-config'
import { collection, getDoc, getDocs } from 'firebase/firestore'


function FireComponent() {
    const [users, setUsers] = useState([])
    const usersCollectionRef = collection(db, "users")    
    

    // console.log("asdfad")
    useEffect(() => {
        const getUsers = async () => {
            // getDocs  = for getting arrays of data ...
            const data = await getDocs(usersCollectionRef)
            console.log(data.docs)
            setUsers(
                data.docs.map((doc) => ({
                    ...doc.data(), // enters all the attributes without their id : 
                    id: doc.id
                }))
            )
            console.log("aa")
        }
       
        getUsers()    

    }, [])
    
  return (
      <div>{users.map(u => <div>{u.name} : {u.age}</div>)}</div>
  )
}

export default FireComponent