import React, {Component} from 'react'

const TableHeader = () => {
    return(
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
        </tr>
    </thead>
    )
}

const TableBody = () => {
    return(
        <tbody>
        <tr>
            <td>Charlie</td>
            <td>Janitor</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2r</td>
        </tr>
        <tr>
            <td>3</td>
            <td>4</td>
        </tr>
        <tr>
            <td>5</td>
            <td>6</td>
        </tr>
        <tr>
            <td>7</td>
            <td>8</td>
        </tr>
        <tr>
            <td>9</td>
            <td>10</td>
        </tr>
    </tbody>
    )
}

class Table extends Component{
    render(){
        return(
     <table>
         <TableHeader/>
         <TableBody/>
     </table>    
        )
    }
}

export default Table