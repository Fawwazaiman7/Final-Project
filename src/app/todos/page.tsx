import { prisma } from '@/lib/prisma'
import { title } from 'process'
import React from 'react'

export default async function page() {
    const query = await prisma.todoList.findMany({

    })


  return (
    <div>
        {query.map(todo =>(
            <li key={todo.id}>{todo.nama} {todo.kelas} {todo.prodi} {todo.jurusan} </li>
        ))}

    </div>
  )
}
