import { useCallback, useState } from 'react'

const useInput = () => {
  const [value, setValue] = useState('')

  const handleChange = useCallback((e) => {
    const { value } = e.target ?? '' //почитать
    setValue(value)
  }, [])

  return [value, handleChange]
}

export default useInput
