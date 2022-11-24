import { v4 as uid } from 'uuid'

const uniqueId = (str = 'unique') => str + uid()
  
export const capitalize = (str:string) : string => str.charAt(0).toUpperCase() + str.slice(1)

export default uniqueId