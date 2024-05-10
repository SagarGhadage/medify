import React from 'react'
import style from "./Button.module.css"
function Button({ varient, handleClick, btnText, children ,type}) {
  console.log(varient)
  switch (varient) {
    // case btnVarient.GREEN:
    //   return (
    //     <button className={style.GREEN} onClick={handleClick}>{btnText ? btnText : children ? children : "Button"} </button>
    //   )
    // case btnVarient.RED: return (
    //   <button className={style.RED} onClick={handleClick}>{btnText ? btnText : children ? children : "Button"} </button>
    // )
    case btnVarient.LIGHTBLUE:
      return (
        <button className={style.LIGHTBLUE} onClick={handleClick}>{btnText ? btnText : children ? children : "Button"} </button>
      )
    case btnVarient.BLACK:
      return (
        <button type={type} className={style.BLACK} onClick={handleClick}>{btnText ? btnText : children ? children : "Button"} </button>
      )
    default: return (
      <button className={style.defaultBtn} onClick={handleClick}>{btnText ? btnText : children ? children : "Button"} </button>
    ) 
  }

}
export const btnVarient = Object.freeze({
  LIGHTBLUE:'LIGHTBLUE', BLACK: "BLACK",
})
export default Button