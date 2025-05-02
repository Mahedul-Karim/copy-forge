import React from 'react'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

const FloatingTextarea = ({label,hasValue=false,...props}) => {
  return (
    <div className="relative z-[1]">
      <Textarea
        className={
          `border-transparent border-b-border shadow-none rounded-none dark:bg-transparent dark:border-b-[#444] border-b-2 text-text-primary py-3 h-auto focus:border-b-primary dark:focus:border-b-primary peer ${hasValue && 'border-b-primary'}`
        }
        {...props}
      />
      <Label className={`text-base text-text-secondary/60 font-normal absolute top-[15px] left-[10px] peer-focus:text-sm peer-focus:top-[-12px] peer-focus:left-0 transition-all duration-300 z-[-1] peer-focus:font-medium peer-focus:text-text-primary ${hasValue && 'top-[-12px] text-sm left-0 text-text-primary font-medium'}`}>
        {label}
      </Label>
    </div>
  )
}

export default FloatingTextarea