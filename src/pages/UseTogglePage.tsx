import useToggle from '@/hooks/useToggle'

export default function UseTogglePage() {
  const [value, toggle] = useToggle<string[]>(['blue', 'orange', 'cyan', 'teal'])

	const [valueBool, setValueBool] = useToggle<boolean>(true)

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
