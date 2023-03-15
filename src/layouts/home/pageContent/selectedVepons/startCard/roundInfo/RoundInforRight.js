import React from 'react'
import BalanceButton from '../../../../../../components/common/BalanceButton'

const buttons=[
    {name:"", 
    icon:'https://p1.hiclipart.com/preview/37/621/91/vista-rtm-wow-icon-safe-shield-green-and-gray-shield-with-check-icon-png-clipart.jpg', 
    value:''},
    {name:"Bank", 
    icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmi3foyXP5Gx3HqaVNKRt6jtYi8-8Y98NhPA&usqp=CAU', 
    value:'$98.00'},
    {name:"Players", 
    icon:'https://static.vecteezy.com/system/resources/previews/008/480/000/original/two-people-3d-icon-model-cartoon-style-concept-render-illustration-png.png', 
    value:'245'},
    {name:"Skins", 
    icon:'https://www.nicepng.com/png/full/42-420101_preview-white-gun-icon-png.png', 
    value:'342'}
];
export default function RoundInforRight() {
  return (
    <div style={{display:'flex' , gap:'10px'}}>
        {buttons.map((val, key)=>{
            return <div key={key}>
                <BalanceButton name={val.name} icon={val.icon} value={val.value}/>
            </div>
        })}
        
    </div>
  )
}
