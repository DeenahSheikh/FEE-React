import React from 'react'
import './StudentInfo.css'
function StudentInfo() {
  return (
    <div>
      <h2>Student Information</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alok</td>
            <td>21</td>
            <td>alok123@gmail.com</td>
          </tr>

          <tr>
            <td>Ram</td>
            <td>20</td>
            <td>ram322@gmail.com</td>
          </tr>

          <tr>
            <td>Gopal</td>
            <td>23</td>
            <td>Gopal_2001@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StudentInfo
