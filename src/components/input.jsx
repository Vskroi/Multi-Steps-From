
export const Input = (props) => {
  const {text, id, onChange} = props
  return (
    <>
     <label htmlFor={id}>{text} <span className="text-[#e14942]">*</span> </label>
 <input onChange={onChange} className='h-11 p-3 w-full rounded-lg border border-[#0ca5e9] justify-start items-center inline-flex' placeholder="placeholder"/>
 </>
  )
}