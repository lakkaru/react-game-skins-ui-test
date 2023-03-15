import React from "react";
import BalanceButton from "../../../../components/common/BalanceButton";

import SelectAll from '../../../../components/selectBalance/SelectAll';

export default function SelectBalance() {
  return (
    <div style={{display:'flex', justifyContent:'space-between', backgroundColor:'#251e3f', padding:'8px', borderRadius:'15px'}}>
      <BalanceButton name='Balance' icon='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmi3foyXP5Gx3HqaVNKRt6jtYi8-8Y98NhPA&usqp=CAU' value='$1440.00'/>
      <SelectAll />
    </div>
  );
}
