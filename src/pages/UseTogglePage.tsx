import useToggle from '@/hooks/useToggle'

export default function UseTogglePage() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal'])

	const [valueBool, setValueBool] = useToggle()

  return (
    <>
      <button onClick={() => toggle()}>{value}</button>
			<br />
      <button onClick={() => toggle('cyan')}>Set 'cyan' value</button>
			<br />
			<button onClick={() => setValueBool()}>{`${valueBool}`}</button>
    </>
  )
}
