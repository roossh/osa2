import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Content = ({parts}) => {
    const rows = () => parts.map(part =>
    <Part part={part.name} exercises={part.exercises}/>)
    return (
        <div>
            {rows()}
        </div>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    )
}

const Total = ({parts}) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)

    return (
        <div>
            <p>yhteensä {total} tehtävää</p>
        </div>
    )
}

const Course = ({course}) => {
    return(
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
} 

export default Course